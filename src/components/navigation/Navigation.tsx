import React, { useEffect, useState } from 'react';

import { DesktopNavigation } from './desktop/DesktopNavigation';

export const Navigation = () => {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    setMatches(window.matchMedia('(min-width: 1120px)').matches);
  }, []);

  useEffect(() => {
    window.matchMedia('(min-width: 1120px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <DesktopNavigation />
    </>
  );
};
