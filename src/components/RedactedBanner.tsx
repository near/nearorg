import { Container } from '@near-pagoda/ui';

import s from './RedactedBanner.module.scss';

export const RedactedBanner = () => {
  const now = Date.now();
  const redactedEndTime = 1731312000000; // Nov 11th 2024
  const hackathonEndTime = 1731312000000; // Nov 11th 2024
  const hackathonEndPassed = now > hackathonEndTime;
  const redactedEndPassed = now > redactedEndTime;

  if (redactedEndPassed) return null;

  return (
    <Container>
      <div className={s.redactedBanner}>
        <a href="https://airtable.com/appdLXQkwmt4rqtW0/pag21sUeq3cAW994V/form" target="_blank">
          <img
            src="/images/redacted/redacted-left-2.png"
            alt="Redacted: Reclaim your sovereignty at no cost. Click to be there IRL"
          />
        </a>

        {hackathonEndPassed ? (
          <img src="/images/redacted/redacted-right-empty.png" alt="Redacted" />
        ) : (
          <a href="https://redacted.devpost.com/" target="_blank">
            <img
              src="/images/redacted/redacted-right-2.png"
              alt="Redacted: It's so much more than a hackathon. Click to learn more"
            />
          </a>
        )}
      </div>
    </Container>
  );
};
