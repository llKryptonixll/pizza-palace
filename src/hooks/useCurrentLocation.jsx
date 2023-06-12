import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useCurrentLocation() {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActivePath(location.pathname);
  }, [location]);

  function getClassName(path) {
    return path === activePath ? 'text-accent' : 'text-softWhite';
  }

  return { getClassName };
}

export default useCurrentLocation;