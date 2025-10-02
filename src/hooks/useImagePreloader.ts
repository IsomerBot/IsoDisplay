'use client';

import { useEffect, useRef } from 'react';
import { PlaylistItem } from '@/types/playlist';

// Global image cache
const imageCache = new Map<string, HTMLImageElement>();
const loadingPromises = new Map<string, Promise<void>>();

interface UseImagePreloaderOptions {
  enabled?: boolean;
  preloadCount?: number; // Number of items to preload ahead
  cacheSize?: number; // Maximum number of images to keep in cache
}

export function useImagePreloader(
  items: PlaylistItem[],
  currentIndex: number,
  options: UseImagePreloaderOptions = {}
) {
  const { enabled = true, preloadCount = 2, cacheSize = 10 } = options;
  const preloadedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!enabled || items.length === 0) return;

    const preloadImage = async (url: string): Promise<void> => {
      // Skip if already cached or loading
      if (imageCache.has(url) || loadingPromises.has(url)) {
        return;
      }

      const loadPromise = new Promise<void>((resolve) => {
        const img = new Image();

        img.onload = () => {
          imageCache.set(url, img);
          loadingPromises.delete(url);
          preloadedRef.current.add(url);
          resolve();
        };

        img.onerror = () => {
          loadingPromises.delete(url);
          console.error(`Failed to preload image: ${url}`);
          resolve(); // Resolve anyway to not block other preloads
        };

        // Important: Set crossOrigin before src
        img.crossOrigin = 'anonymous';

        // Force browser to decode the image immediately
        img.decoding = 'async';

        // Start loading
        img.src = url;
      });

      loadingPromises.set(url, loadPromise);
      return loadPromise;
    };

    const getImageUrl = (item: PlaylistItem): string | null => {
      // Only preload images, not videos or other content
      if (item.contentType?.toLowerCase() !== 'image') {
        return null;
      }

      if (item.content?.fileUrl) {
        return item.content.fileUrl;
      } else if (item.thumbnail) {
        return item.thumbnail;
      }
      return null;
    };

    const preloadUpcomingImages = async () => {
      const preloadTasks: Promise<void>[] = [];

      // Preload the next N items
      for (let i = 1; i <= preloadCount; i++) {
        const nextIndex = (currentIndex + i) % items.length;
        const nextItem = items[nextIndex];

        if (nextItem) {
          const imageUrl = getImageUrl(nextItem);
          if (imageUrl && !preloadedRef.current.has(imageUrl)) {
            preloadTasks.push(preloadImage(imageUrl));
          }
        }
      }

      // Also preload the previous item for smooth backwards navigation
      const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      const prevItem = items[prevIndex];
      if (prevItem) {
        const imageUrl = getImageUrl(prevItem);
        if (imageUrl && !preloadedRef.current.has(imageUrl)) {
          preloadTasks.push(preloadImage(imageUrl));
        }
      }

      // Wait for all preloads to complete
      await Promise.all(preloadTasks);
    };

    // Start preloading
    preloadUpcomingImages();

    // Clean up old cached images if cache gets too large
    if (imageCache.size > cacheSize) {
      const urlsToKeep = new Set<string>();

      // Keep current and nearby items
      for (let i = -2; i <= preloadCount + 1; i++) {
        const index = (currentIndex + i + items.length) % items.length;
        const item = items[index];
        if (item) {
          const url = getImageUrl(item);
          if (url) urlsToKeep.add(url);
        }
      }

      // Remove items not in the keep list
      for (const [url] of imageCache) {
        if (!urlsToKeep.has(url)) {
          imageCache.delete(url);
          preloadedRef.current.delete(url);
        }
      }
    }
  }, [items, currentIndex, enabled, preloadCount]);

  return {
    isCached: (url: string) => imageCache.has(url),
    getCachedImage: (url: string) => imageCache.get(url),
    clearCache: () => {
      imageCache.clear();
      loadingPromises.clear();
      preloadedRef.current.clear();
    }
  };
}

export default useImagePreloader;