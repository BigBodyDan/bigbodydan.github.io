/**
 * @name useOnScreen.tsx
 * @type Hook
 */

'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * @useOnScreen
 * @description Hook that will return 2 elements
 * @return reference to assign to the desired component
 * @return indicator of whether the element is visible on the screen or not
 */
export function useOnScreen<T extends Element>(threshold = 0.1) {

  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting] as const;
}
