import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/debug/display/[id] - Get raw display data from database
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    // Query the database directly
    const display = await prisma.display.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        isRaspberryPi: true,
        updatedAt: true,
        resolution: true,
        orientation: true,
        location: true,
      }
    });

    if (!display) {
      return NextResponse.json({ error: 'Display not found' }, { status: 404 });
    }

    // Return raw database values
    return NextResponse.json({
      message: 'Raw database values',
      display,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching raw display:', error);
    return NextResponse.json(
      { error: 'Failed to fetch display', details: error },
      { status: 500 }
    );
  }
}