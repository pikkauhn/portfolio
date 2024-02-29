'use client';
import { useState, useEffect } from 'react';

export default function useResponsiveStrings(): {
  contentShape: string;
  pageHeader: string;
  pageContent: string;
} {
  const [width, setWidth] = useState<number>(0);
  const [responsiveStrings, setResponsiveStrings] = useState({
    contentShape: 'contentShape',
    pageHeader: 'pageHeader',
    pageContent: 'pageContent',
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width < 900) {
        setResponsiveStrings({
          contentShape: 'contentShapeMobile',
          pageHeader: 'pageHeaderMobile',
          pageContent: 'pageContentMobile',
        });
      } else {
        setResponsiveStrings({
          contentShape: 'contentShape',
          pageHeader: 'pageHeader',
          pageContent: 'pageContent',
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return responsiveStrings;
}
