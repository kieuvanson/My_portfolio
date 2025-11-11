import { useEffect, useRef } from 'react';

// useReveal: attach to a section. Any child with [data-reveal] will fade/slide in
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(container.querySelectorAll('[data-reveal]'));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // apply visible class with optional delay via CSS variable
            const delay = el.getAttribute('data-delay');
            if (delay) {
              el.style.setProperty('--reveal-delay', delay);
            }
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}


