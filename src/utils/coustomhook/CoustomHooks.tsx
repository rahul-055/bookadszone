// usePath.js (Custom Hook)
import { useState, useEffect } from 'react';

export const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener('popstate', handlePopState); // Listen for changes

    return () => {
      window.removeEventListener('popstate', handlePopState); // Cleanup on unmount
    };
  }, []);

  return path;
};
