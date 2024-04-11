import { type ReactNode } from 'react';
import styled from 'styled-components';

import { Banner } from '../Banner';
import { Footer } from '../Footer';
import { Button } from '../lib/Button';
import { Navigation } from '../navigation/Navigation';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  align-items: stretch;
  min-width: 0;
`;

export function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Banner
        bannerId="early-stage-founder" // See note about "bannerId" in <Banner /> source
        message="Are you an early-stage founder? Apply to our equity-free accelerator program. Applications are now live!"
        actions={
          <>
            <Button
              href="https://airtable.com/appFoIqAoY0ikoVIb/shrst8Tt4PUtYTSvD"
              target="_blank"
              label="Apply Now"
              iconRight="ph-bold ph-arrow-up-right"
              variant="primary"
              fill="outline"
              size="small"
              className="desktop-button"
            />

            <Button
              href="https://airtable.com/appFoIqAoY0ikoVIb/shrst8Tt4PUtYTSvD"
              target="_blank"
              label="Apply"
              iconRight="ph-bold ph-arrow-up-right"
              variant="primary"
              fill="outline"
              size="small"
              className="mobile-button"
            />
          </>
        }
      />

      <Navigation />

      <Content>
        {children}
        <Footer />
      </Content>
    </Wrapper>
  );
}
