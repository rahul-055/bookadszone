// usePath.js (Custom Hook)
import { useState, useEffect } from 'react';

export const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);
   
  useEffect(() => {

    // console.log(window.location,"-----------path");
    
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener('popstate', handlePopState); // Listen for changes 
                                                        // popstate triggers only when the page navigates without reload the browser
                                                        //so the url path changes on navigation and path is set  to path using handlePopState


    return () => {
      window.removeEventListener('popstate', handlePopState); // Cleanup on unmount
    };
  }, []);

  return path;
};
