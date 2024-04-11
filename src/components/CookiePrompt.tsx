import Link from 'next/link';
import styled from 'styled-components';

import { useCookiePreferences } from '@/hooks/useCookiePreferences';

import { Button } from './lib/Button';
import { Text } from './lib/Text';

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 4px;

  a {
    color: var(--violet8);
    font-weight: 600;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    bottom: 0;
    width: unset;
    border-radius: 0;
    flex-direction: column;
    text-align: center;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-shrink: 0;
`;

export const CookiePrompt = () => {
  const { cookiesPreference, setCookiesPreference } = useCookiePreferences();

  if (cookiesPreference) return null;

  return (
    <Wrapper>
      <Text $size="text-s" $mobileSize="text-xs">
        We use our own and third-party cookies on our website to enhance your experience, analyze traffic, and for
        marketing. For more information see our <Link href="/cookies">Cookie Policy</Link>.
      </Text>

      <Actions>
        <Button size="small" label="Accept" variant="primary" onClick={() => setCookiesPreference('all')} />

        <Button
          size="small"
          label="Only Required"
          variant="secondary"
          onClick={() => setCookiesPreference('only_required')}
        />
      </Actions>
    </Wrapper>
  );
};
