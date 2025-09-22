import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth-helpers';
import { playlistService } from '@/lib/services/playlist-service';
import { databaseToApiPlaylist } from '@/lib/transformers/api-transformers';
import { isValidUUID } from '@/lib/validators/api-validators';

const serializeBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'bigint') return obj.toString();
  if (obj instanceof Date) return obj.toISOString();
  if (Array.isArray(obj)) return obj.map(serializeBigInt);
  if (typeof obj === 'object') {
    const serialized: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      serialized[key] = serializeBigInt(value);
    }
    return serialized;
  }
  return obj;
};

// POST /api/playlists/[id]/duplicate - Duplicate playlist
export async function POST(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser();
    if (!user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    if (!isValidUUID(id)) {
      return NextResponse.json({ error: 'Invalid playlist ID format' }, { status: 400 });
    }

    let requestedName: string | undefined;
    try {
      const body = await request.json();
      if (body && typeof body.name === 'string') {
        requestedName = body.name.trim();
      }
    } catch {
      // Ignore JSON parse errors; duplication can proceed without a body
    }

    // Verify the user exists in the database (handles session/db mismatches)
    const { prisma } = await import('@/lib/prisma');
    const dbUser = await prisma.user.findUnique({ where: { id: user.id } });

    let actualUserId = user.id;
    if (!dbUser) {
      const userByEmail = await prisma.user.findUnique({ where: { email: user.email } });
      if (!userByEmail) {
        return NextResponse.json({ error: 'User account not found. Please log out and log in again.' }, { status: 401 });
      }
      actualUserId = userByEmail.id;
    }

    const originalPlaylist = await playlistService.getPlaylist(id);
    if (!originalPlaylist) {
      return NextResponse.json({ error: 'Playlist not found' }, { status: 404 });
    }

    const perms = (user.permissions as string[]) || [];
    const isOwner = originalPlaylist.createdBy === actualUserId;
    const isAdmin = perms.includes('PLAYLIST_CREATE') || perms.includes('USER_CONTROL') || perms.includes('SYSTEM_SETTINGS');

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const duplicatedPlaylist = await playlistService.duplicatePlaylist(
      id,
      actualUserId,
      requestedName
    );

    if (!duplicatedPlaylist) {
      return NextResponse.json(
        { error: 'Playlist not found or access denied' },
        { status: 404 }
      );
    }

    const apiResponse = databaseToApiPlaylist(duplicatedPlaylist);
    const serializedResponse = serializeBigInt(apiResponse);

    return NextResponse.json(serializedResponse, { status: 201 });
  } catch (error) {
    console.error('Error duplicating playlist:', error);
    return NextResponse.json(
      { error: 'Failed to duplicate playlist' },
      { status: 500 }
    );
  }
}
