import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, hasPermission } from '@/lib/auth-helpers';
import { prisma } from '@/lib/prisma';
import { databaseToApiContent } from '@/lib/transformers/api-transformers';
import { validateUpdateContent, type UpdateContentInput } from '@/lib/validators/content-schemas';
import { validationErrorResponse, ErrorResponses, isValidUUID } from '@/lib/validators/api-validators';
import { promises as fs } from 'fs';
import { generateDisplayThumbnail } from '@/lib/upload/image-processor';
import { generatePdfThumbnail } from '@/lib/upload/document-processor';
import { ContentType } from '@/generated/prisma';
import path from 'path';
import { resolveUploadsPath } from '@/lib/upload/path-utils';


// GET individual content item
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    
    if (!user || !await hasPermission('CONTENT_CREATE')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    
    // Validate ID format
    if (!isValidUUID(id)) {
      return ErrorResponses.badRequest('Invalid content ID format');
    }

    const content = await prisma.content.findUnique({
      where: { id },
      include: {
        thumbnails: true,
      },
    });

    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    // Transform database response to API format
    const apiResponse = databaseToApiContent(content);

    return NextResponse.json(apiResponse);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// UPDATE content item
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    
    if (!user || !await hasPermission('CONTENT_CREATE')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    
    // Validate ID format
    if (!isValidUUID(id)) {
      return ErrorResponses.badRequest('Invalid content ID format');
    }
    
    const body = await request.json();
    
    // Validate request body
    const validation = validateUpdateContent(body);
    if (!validation.success) {
      return validationErrorResponse(validation.error);
    }
    
    const validatedData = validation.data as UpdateContentInput;

    // Check if content exists
    const existingContent = await prisma.content.findUnique({
      where: { id },
    });

    if (!existingContent) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    // Update content
    const updatedContent = await prisma.content.update({
      where: { id },
      data: {
        ...validatedData,
        updatedAt: new Date(),
      },
      include: {
        thumbnails: true,
      },
    });

    // Regenerate display thumbnail if image or PDF properties changed
    const shouldRegenerateThumbnail =
      (existingContent.type === ContentType.IMAGE &&
       (validatedData.backgroundColor !== undefined ||
        validatedData.metadata?.imageScale !== undefined ||
        validatedData.metadata?.imageSize !== undefined)) ||
      (existingContent.type === ContentType.PDF &&
       (validatedData.backgroundColor !== undefined ||
        validatedData.metadata?.pdfScale !== undefined ||
        validatedData.metadata?.pdfSize !== undefined));

    if (shouldRegenerateThumbnail) {
      try {
        console.log('Regenerating thumbnail for content:', id);

        // Find existing display thumbnail
        const displayThumbnail = updatedContent.thumbnails.find(t => t.size === 'display');

        if (displayThumbnail && existingContent.filePath) {
          // Determine the output path for the thumbnail
          let outputPath: string;

          // If the existing thumbnail is a local file, use the same path
          if (displayThumbnail.filePath && !displayThumbnail.filePath.startsWith('http')) {
            outputPath = displayThumbnail.filePath;
          } else {
            // Generate a new path for the thumbnail
            const uploadsDir = resolveUploadsPath('images');
            const filename = `${id}-display-${Date.now()}.jpg`;
            outputPath = path.join(uploadsDir, filename);

            // Ensure directory exists
            await fs.mkdir(uploadsDir, { recursive: true });
          }

          // Generate new thumbnail with updated properties
          const metadata = updatedContent.metadata as any || {};

          if (existingContent.type === ContentType.IMAGE) {
            // For images, use generateDisplayThumbnail with scale settings
            await generateDisplayThumbnail(
              existingContent.filePath,
              outputPath,
              updatedContent.backgroundColor || '#000000',
              metadata.imageScale || 'contain',
              metadata.imageSize || 100
            );
          } else if (existingContent.type === ContentType.PDF) {
            // For PDFs, first generate a basic thumbnail from the first page
            const tempThumbPath = outputPath.replace('.jpg', '-temp.jpg');
            await generatePdfThumbnail(existingContent.filePath, tempThumbPath, {
              page: 1,
              width: 1920,
              height: 1080,
            });

            // Then apply the display settings to the thumbnail
            await generateDisplayThumbnail(
              tempThumbPath,
              outputPath,
              updatedContent.backgroundColor || '#000000',
              metadata.pdfScale || 'contain',
              metadata.pdfSize || 100
            );

            // Clean up temp file
            try {
              await fs.unlink(tempThumbPath);
            } catch (e) {
              // Ignore cleanup errors
            }
          }

          console.log('Thumbnail regenerated at:', outputPath);

          // Always update thumbnail record to trigger cache invalidation
          // Get file size
          const stats = await fs.stat(outputPath);

          await prisma.fileThumbnail.update({
            where: { id: displayThumbnail.id },
            data: {
              filePath: outputPath,
              fileSize: BigInt(stats.size),
              // Update the updatedAt timestamp to help with cache invalidation
              updatedAt: new Date(),
            },
          });
        }
      } catch (error) {
        console.error('Failed to regenerate thumbnail:', error);
        // Don't fail the entire update if thumbnail regeneration fails
      }
    }

    // Re-fetch content with updated thumbnail info
    const finalContent = await prisma.content.findUnique({
      where: { id },
      include: {
        thumbnails: true,
      },
    });

    // Transform database response to API format
    const apiResponse = databaseToApiContent(finalContent || updatedContent);

    return NextResponse.json(apiResponse);
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}

// DELETE content item
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    
    if (!user || !await hasPermission('CONTENT_DELETE')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await context.params;
    
    // Validate ID format
    if (!isValidUUID(id)) {
      return ErrorResponses.badRequest('Invalid content ID format');
    }

    // Check if content exists and get thumbnails
    const existingContent = await prisma.content.findUnique({
      where: { id },
      include: {
        thumbnails: true,
      },
    });

    if (!existingContent) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    // Delete thumbnail records and files
    if (existingContent.thumbnails && existingContent.thumbnails.length > 0) {
      for (const thumbnail of existingContent.thumbnails) {
        // Try to delete the physical file if it's a local file
        if (thumbnail.filePath && !thumbnail.filePath.startsWith('http')) {
          try {
            await fs.unlink(thumbnail.filePath);
            console.log('Deleted thumbnail file:', thumbnail.filePath);
          } catch (error) {
            console.error('Failed to delete thumbnail file:', thumbnail.filePath, error);
            // Continue even if file deletion fails (file might not exist)
          }
        }
      }
      
      // Delete all thumbnail records from database
      await prisma.fileThumbnail.deleteMany({
        where: { contentId: id },
      });
      console.log(`Deleted ${existingContent.thumbnails.length} thumbnail records for content ${id}`);
    }

    // Soft delete the content
    await prisma.content.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    );
  }
}