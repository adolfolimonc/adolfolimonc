'use client';
import { useEffect } from 'react';

export default function HashHandler() {
  useEffect(() => {
    // Handle hash navigation when page loads
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(hash);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return null; // This component doesn't render anything
} 