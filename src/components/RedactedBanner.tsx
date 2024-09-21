import { Container } from '@near-pagoda/ui';

import s from './RedactedBanner.module.scss';

export const RedactedBanner = () => {
  return (
    <Container>
      <div className={s.redactedBanner}>
        <a href="https://airtable.com/appdLXQkwmt4rqtW0/pag21sUeq3cAW994V/form" target="_blank">
          <img
            src="/images/redacted/redacted-left.png"
            alt="Redacted: Reclaim your sovereignty at no cost. Click to be there IRL"
          />
        </a>

        <a href="https://redacted.devpost.com/" target="_blank">
          <img
            src="/images/redacted/redacted-right.png"
            alt="Redacted: It's so much more than a hackathon. Click to learn more"
          />
        </a>
      </div>
    </Container>
  );
};
