import styled from 'styled-components';

export const Text = styled.p<{
  $color?: string;
  $mobileSize?: string;
  $size?: 'text-xs' | 'text-s' | 'text-base' | 'text-l' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-hero';
  $weight?: string;
}>`
  font: var(--${(p) => p.$size ?? 'text-base'});
  font-weight: ${(p) => p.$weight} !important;
  color: var(--${(p) => p.$color ?? 'sand12'});
  margin: 0;

  @media (max-width: 900px) {
    font: var(--${(p) => p.$mobileSize ?? p.$size ?? 'text-base'});
  }
`;
