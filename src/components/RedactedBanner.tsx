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
            src="/images/redacted/redacted-left-3.png"
            alt="Redacted: Reclaim your sovereignty at no cost. Click to be there IRL"
          />
          <img src="/images/redacted/redacted-right-3.png" alt="Redacted: Bangkok, Thailand, November 9-11" />
        </a>
      </div>
    </Container>
  );
};
