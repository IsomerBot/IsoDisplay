/**
 * Preload configuration for display player
 */

import { isRaspberryPi, isLowPowerDevice } from '@/lib/device-detection';

export interface PreloadConfig {
  enabled: boolean;
  preloadCount: number;
  showLoadingText: boolean;
  cacheSize: number;
  decodeImmediately: boolean;
}

export function getPreloadConfig(displaySettings?: { isRaspberryPi?: boolean }): PreloadConfig {
  // Check URL parameters for overrides
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);

    // Allow URL params to override settings
    const enabled = urlParams.get('preload') !== 'false';
    const preloadCount = parseInt(urlParams.get('preloadCount') || '') || undefined;
    const showLoadingText = urlParams.get('showLoading') === 'true';

    const isRPi = isRaspberryPi(displaySettings);
    const isLowPower = isLowPowerDevice(displaySettings);

    return {
      enabled: enabled,
      preloadCount: preloadCount || (isRPi ? 5 : 3), // More aggressive preloading on Pi
      showLoadingText: showLoadingText || (!isRPi && !isLowPower), // Hide on Pi by default
      cacheSize: isRPi ? 15 : 10, // Larger cache for Pi to avoid reloading
      decodeImmediately: isRPi // Force immediate decode on Pi
    };
  }

  // Default config for server-side
  return {
    enabled: true,
    preloadCount: 3,
    showLoadingText: true,
    cacheSize: 10,
    decodeImmediately: false
  };
}