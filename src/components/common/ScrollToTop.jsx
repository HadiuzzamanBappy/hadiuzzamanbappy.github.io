import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // The `useLocation` hook returns the location object that represents the current URL.
  const { pathname } = useLocation();

  // This `useEffect` hook will run every time the `pathname` changes.
  useEffect(() => {
    // The `window.scrollTo` method scrolls the window to a particular set of coordinates.
    // (0, 0) means the top-left corner of the document.
    window.scrollTo(0, 0);
  }, [pathname]); // The effect dependency array contains `pathname`.

  // This component doesn't render any visible UI, so it returns null.
  return null;
};

export default ScrollToTop;