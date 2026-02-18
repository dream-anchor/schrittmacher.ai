import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const el = ref.current;
    if (el) {
      const revealElements = el.querySelectorAll('.reveal');
      revealElements.forEach(child => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return ref;
}
