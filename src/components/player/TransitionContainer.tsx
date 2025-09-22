'use client';

import { ReactNode, memo, useRef, useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { TransitionEffect } from '@/types/playlist';
import '@/styles/transitions.css';

interface TransitionContainerProps {
  children: ReactNode;
  transition: TransitionEffect;
  duration: number;
  contentKey: string | number;
}

export const TransitionContainer = memo(function TransitionContainer({
  children,
  transition,
  duration,
  contentKey,
}: TransitionContainerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);
  const [optimizedTransition, setOptimizedTransition] = useState(transition);
  const [optimizedDuration, setOptimizedDuration] = useState(duration);

  useEffect(() => {
    // Check for forced performance mode via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const forcePerformanceMode = urlParams.get('performance') === 'low';

    // Detect Raspberry Pi or low-powered device
    const userAgent = navigator.userAgent.toLowerCase();
    const isRaspberryPi = userAgent.includes('raspbian') ||
                          userAgent.includes('armv') ||
                          userAgent.includes('aarch64') ||
                          userAgent.includes('raspberry');

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for low memory (less than 2GB)
    const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2;

    // Check for low core count
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    const isLowPower = forcePerformanceMode || isRaspberryPi || prefersReducedMotion || lowMemory || lowCores;
    setIsLowPowerDevice(isLowPower);

    if (isLowPower) {
      // Simplify complex transitions to fade for better performance
      const complexTransitions = ['dissolve', 'burn', 'morph', 'zoom', 'iris', 'peel', 'page-roll'];
      if (complexTransitions.includes(transition)) {
        setOptimizedTransition('fade');
      } else {
        setOptimizedTransition(transition);
      }

      // Reduce transition duration for smoother playback
      setOptimizedDuration(Math.min(duration, 0.5)); // Cap at 500ms for Pi
    } else {
      setOptimizedTransition(transition);
      setOptimizedDuration(duration);
    }
  }, [transition, duration]);

  const transitionClassNames = `transition-${optimizedTransition}`;
  const timeout = optimizedDuration * 1000;

  // Set CSS variable for transition duration
  const style = {
    '--transition-duration': `${optimizedDuration}s`,
  } as React.CSSProperties;

  // For instant transitions (cut), just render without animation
  if (optimizedTransition === 'cut') {
    return (
      <div className="relative w-full h-full gpu-accelerated hardware-accelerate">
        <div className="absolute inset-0 gpu-transition low-power-optimize">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full gpu-accelerated hardware-accelerate overflow-hidden ${isLowPowerDevice ? 'low-power-optimize' : ''}`}
      style={{
        perspective: isLowPowerDevice ? 'none' : '1200px',
        transformStyle: isLowPowerDevice ? 'flat' : 'preserve-3d',
      }}
    >
      <SwitchTransition>
        <CSSTransition
          key={contentKey}
          timeout={timeout}
          classNames={transitionClassNames}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            if (nodeRef.current) {
              nodeRef.current.addEventListener('transitionend', done, false);
            }
          }}
        >
          <div
            ref={nodeRef}
            className={`absolute inset-0 gpu-transition ${isLowPowerDevice ? 'low-power-optimize' : ''}`}
            style={{
              ...style,
              transformStyle: isLowPowerDevice ? 'flat' : 'preserve-3d',
              backfaceVisibility: 'hidden',
              willChange: isLowPowerDevice ? 'opacity' : 'transform, opacity',
              transform: 'translateZ(0)', // Force GPU layer
            }}
          >
            {children}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
});

export default TransitionContainer;
