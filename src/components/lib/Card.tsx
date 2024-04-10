import styled, { css } from 'styled-components';

export const Card = styled.div<{
  $clickable?: boolean;
  $dark?: boolean;
}>`
  --background-hover-color: ${(p) => (p.$dark ? 'var(--whiteA6)' : 'var(--blackA6)')};
  --background-focus-color: ${(p) => (p.$dark ? 'var(--whiteA6)' : 'var(--blackA6)')};
  --border-color: ${(p) => (p.$dark ? '#717069' : 'var(--sand11)')};
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 32px;
  transition: all 200ms;
  outline: none;
  box-shadow: 0 0 0 0px var(--violet4);

  ${(p) =>
    p.$clickable
      ? css`
          &:hover {
            text-decoration: none;
            background: var(--background-hover-color);
          }

          &:focus-within {
            text-decoration: none;
            background: var(--background-focus-color);
            box-shadow: 0 0 0 4px var(--violet4);
          }
        `
      : undefined}

  @media (max-width: 1000px) {
    padding: 24px;
    gap: 24px;
  }
`;

export const CardThumbnail = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
