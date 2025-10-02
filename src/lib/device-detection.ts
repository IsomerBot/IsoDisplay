/**
 * Device detection utilities
 */

export function isRaspberryPi(displaySettings?: { isRaspberryPi?: boolean }): boolean {
  // First check if explicitly set in display settings
  if (displaySettings?.isRaspberryPi !== undefined) {
    return displaySettings.isRaspberryPi;
  }

  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent.toLowerCase();

  // Check for Raspberry Pi indicators in user agent
  const isRPi = userAgent.includes('raspbian') ||
                userAgent.includes('armv') ||
                userAgent.includes('aarch64') ||
                userAgent.includes('raspberry');

  return isRPi;
}

export function isLowPowerDevice(displaySettings?: { isRaspberryPi?: boolean }): boolean {
  // If it's a Raspberry Pi, it's a low power device
  if (isRaspberryPi(displaySettings)) return true;

  if (typeof window === 'undefined') return false;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return true;

  // Check for low memory (less than 2GB)
  const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2;
  if (lowMemory) return true;

  // Check for low core count
  const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  if (lowCores) return true;

  return false;
}

export function getDeviceCapabilities(displaySettings?: { isRaspberryPi?: boolean }) {
  if (typeof window === 'undefined') {
    return {
      isRaspberryPi: displaySettings?.isRaspberryPi || false,
      isLowPower: displaySettings?.isRaspberryPi || false,
      memory: undefined,
      cores: undefined,
      prefersReducedMotion: false
    };
  }

  return {
    isRaspberryPi: isRaspberryPi(displaySettings),
    isLowPower: isLowPowerDevice(displaySettings),
    memory: (navigator as any).deviceMemory,
    cores: navigator.hardwareConcurrency,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  };
}