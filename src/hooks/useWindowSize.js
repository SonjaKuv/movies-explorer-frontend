import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const getWindowSize = () => {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize;

}