"use client"

import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      prevLocationRef.current = location;
    }
  }, [location]);
};
