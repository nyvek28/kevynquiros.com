import { RefObject, useEffect, useState } from 'react';

const useSticky = (ref: RefObject<HTMLElement>) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolling");
      console.log(ref.current);
      
      
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setIsSticky(rect.top === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isSticky;
};

export default useSticky;
