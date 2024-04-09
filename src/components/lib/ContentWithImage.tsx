/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 128px;

  @media (max-width: 834px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 48px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }

  [data-image-side='right'] & {
    order: 2;
  }

  @media (max-width: 834px) {
    max-width: 100%;
    order: unset !important;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

type Props = {
  alt: string;
  children: ReactNode;
  imageSide: 'left' | 'right';
  src: string;
};

export const ContentWithImage = ({ alt, src, imageSide, children }: Props) => {
  return (
    <Wrapper data-image-side={imageSide}>
      <ImageWrapper>
        <img src={src} alt={alt} />
      </ImageWrapper>

      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};
