import styled from 'styled-components';

export const Container = styled.div<{
  $center?: boolean;
  $gap?: string;
}>`
  display: flex;
  max-width: 1224px;
  margin: 0 auto;
  gap: ${(p) => p.$gap ?? 'var(--section-gap)'};
  flex-direction: column;
  align-items: ${(p) => (p.$center ? 'center' : undefined)};
  justify-content: ${(p) => (p.$center ? 'center' : undefined)};
  text-align: ${(p) => (p.$center ? 'center' : undefined)};
`;
