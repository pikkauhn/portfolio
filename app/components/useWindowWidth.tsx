'use client'
import { useState, useEffect } from 'react';

export default function useWindowWidth(): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize(); // Set initial width on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}