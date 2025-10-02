'use client';

import { useEffect, useState, useRef } from 'react';

interface ImagePreviewProps {
  file: File | null;
  backgroundColor: string;
  imageScale: 'contain' | 'cover' | 'fill';
  imageSize: number;
}

export function ImagePreview({ file, backgroundColor, imageScale, imageSize }: ImagePreviewProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!file || !file.type.startsWith('image/')) {
      setImageUrl(null);
      return;
    }

    // Create object URL for the uploaded file
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    // Cleanup
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  useEffect(() => {
    if (!imageUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Set canvas size to 16:9 aspect ratio
      const canvasWidth = 640;
      const canvasHeight = 360;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Fill background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Calculate image dimensions based on scale mode
      let drawX = 0, drawY = 0, drawWidth = canvasWidth, drawHeight = canvasHeight;
      let sourceX = 0, sourceY = 0, sourceWidth = img.width, sourceHeight = img.height;

      const imageAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;

      if (imageScale === 'contain') {
        // Fit image within canvas, apply size percentage
        const scaleFactor = imageSize / 100;

        if (imageAspect > canvasAspect) {
          // Image is wider - fit to width
          drawWidth = canvasWidth * scaleFactor;
          drawHeight = drawWidth / imageAspect;
        } else {
          // Image is taller - fit to height
          drawHeight = canvasHeight * scaleFactor;
          drawWidth = drawHeight * imageAspect;
        }

        // Center the image
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = (canvasHeight - drawHeight) / 2;

      } else if (imageScale === 'cover') {
        // Cover entire canvas, crop if necessary
        if (imageAspect > canvasAspect) {
          // Image is wider - fit to height and crop width
          const scale = canvasHeight / img.height;
          const scaledWidth = img.width * scale;
          sourceWidth = (canvasWidth / scaledWidth) * img.width;
          sourceX = (img.width - sourceWidth) / 2;
        } else {
          // Image is taller - fit to width and crop height
          const scale = canvasWidth / img.width;
          const scaledHeight = img.height * scale;
          sourceHeight = (canvasHeight / scaledHeight) * img.height;
          sourceY = (img.height - sourceHeight) / 2;
        }
      }
      // 'fill' mode uses default values (stretch to fill)

      // Draw the image
      ctx.drawImage(
        img,
        sourceX, sourceY, sourceWidth, sourceHeight,
        drawX, drawY, drawWidth, drawHeight
      );
    };

    img.src = imageUrl;
  }, [imageUrl, backgroundColor, imageScale, imageSize]);

  if (!file || !file.type.startsWith('image/')) {
    return null;
  }

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-lg border border-white/10"
        style={{ maxWidth: '100%', backgroundColor }}
      />
      <p className="text-white/50 text-xs mt-2 text-center">
        Preview shows how the image will appear on displays
      </p>
    </div>
  );
}

export default ImagePreview;