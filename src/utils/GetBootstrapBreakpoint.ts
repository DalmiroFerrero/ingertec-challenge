import { useEffect, useState } from 'react';

export const useBootstrapBreakpoint = (breakpoint: string): boolean => {
  const [isBreakpointActive, setIsBreakpointActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let isCurrentBreakpointActive = false;

      if (breakpoint === 'xs' && width < 576) {
        isCurrentBreakpointActive = true;
      } else if (breakpoint === 'sm' && width >= 576 && width < 768) {
        isCurrentBreakpointActive = true;
      } else if (breakpoint === 'md' && width >= 768 && width < 992) {
        isCurrentBreakpointActive = true;
      } else if (breakpoint === 'lg' && width >= 992 && width < 1200) {
        isCurrentBreakpointActive = true;
      } else if (breakpoint === 'xl' && width >= 1200) {
        isCurrentBreakpointActive = true;
      }

      setIsBreakpointActive(isCurrentBreakpointActive);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isBreakpointActive;
};
