import { useEffect } from 'react';

export const useScrollReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elem = ref.current;
    if (elem) observer.observe(elem);
    
    // Also observe any children that have fade-in-up
    let children = [];
    if (elem) {
        children = elem.querySelectorAll('.fade-in-up');
        children.forEach(child => observer.observe(child));
    }

    return () => {
      if (elem) observer.unobserve(elem);
      children.forEach(child => observer.unobserve(child));
    };
  }, [ref]);
};
