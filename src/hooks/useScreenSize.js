import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize);

  function getScreenSize() {
    const width = window.innerWidth;
    if (width >= 1440) {
      return 'xl';
    } else if (width >= 1000) {
      return 'l';
    } else if (width >= 768) {
      return 'm';
    } else if (width >= 480) {
      return 's';
    } else {
      return 'xs';
    }
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;