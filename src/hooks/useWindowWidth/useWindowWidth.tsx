import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  let width: number;
  let setWidth: (newState: number) => void;

  [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize: () => void = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
