import React from 'react';

/**
 * Enhanced smooth scroll function with precise offset calculation
 * and fallback for modern browser support.
 */
export const smoothScrollTo = (e: React.MouseEvent<HTMLElement> | null, href: string) => {
  if (e) e.preventDefault();
  
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const navOffset = 90; // Optimized offset for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};