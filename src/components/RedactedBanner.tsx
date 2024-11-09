import { Container } from '@near-pagoda/ui';

import s from './RedactedBanner.module.scss';

export const RedactedBanner = () => {
  const now = Date.now();
  const redactedEndTime = 1731312000000; // Nov 11th 2024
  const redactedEndPassed = now > redactedEndTime;

  if (redactedEndPassed) return null;

  return (
    <Container>
      <div className={s.redactedBanner}>
        <a href="https://redactedbangkok.ai/" target="_blank">
          <img
            src="/images/redacted/redacted_live-now-banner.png"
            alt="Redacted: Reclaim your sovereignty at no cost. Click to be there IRL"
          />
          
        </a>
      </div>
    </Container>
  );
};
