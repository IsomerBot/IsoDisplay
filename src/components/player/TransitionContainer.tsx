'use client';

import { ReactNode, memo, useRef, useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { TransitionEffect } from '@/types/playlist';
import { isLowPowerDevice } from '@/lib/device-detection';
import '@/styles/transitions.css';

interface TransitionContainerProps {
  children: ReactNode;
  transition: TransitionEffect;
  duration: number;
  contentKey: string | number;
  displaySettings?: { isRaspberryPi?: boolean };
}

export const TransitionContainer = memo(function TransitionContainer({
  children,
  transition,
  duration,
  contentKey,
  displaySettings,
}: TransitionContainerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);
  const [optimizedTransition, setOptimizedTransition] = useState(transition);
  const [optimizedDuration, setOptimizedDuration] = useState(duration);

  useEffect(() => {
    // Use the device detection utility with display settings
    const isLowPower = isLowPowerDevice(displaySettings);
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
