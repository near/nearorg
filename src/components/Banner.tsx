import { type ReactNode, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/lib/Button';
import { Text } from '@/components/lib/Text';
import { useBanner } from '@/hooks/useBanner';

type Props = {
  /*
    NOTE: If an updated banner with new content is desired, consider changing the passed "bannerId" to 
    make sure users who had hidden the previous banner will see the new banner content.
  */

  bannerId: string;
  actions: ReactNode;
  message: ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #00ec97;

  .close-button {
    i {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.5rem;

  @media (max-width: 600px) {
    button {
      font-size: 12px;
    }
  }

  .desktop-button {
    @media (max-width: 600px) {
      display: none !important;
    }
  }

  .mobile-button {
    display: none;
    @media (max-width: 600px) {
      display: inline-flex !important;
    }
  }
`;

export const Banner = ({ actions, bannerId, message }: Props) => {
  const { bannerIsHidden, hideBanner } = useBanner(bannerId);
  const ref = useRef<HTMLDivElement | null>(null);

  const updateBannerHeightProperty = useCallback(() => {
    /*
      Since the mobile navigation menu relies on "position: fixed;", we need to calculate a dynamic 
      offset height based on the banner height and current window scroll position.
    */

    const element = ref.current;
    if (!element) return;

    const offsetHeight = Math.max(element.offsetHeight - window.scrollY, 0);

    if (bannerIsHidden) {
      document.body.style.removeProperty('--banner-nav-offset-height');
    } else {
      document.body.style.setProperty('--banner-nav-offset-height', `${offsetHeight}px`);
    }
  }, [bannerIsHidden]);

  useEffect(() => {
    updateBannerHeightProperty();

    function onWindowChange() {
      updateBannerHeightProperty();
    }

    window.addEventListener('resize', onWindowChange);
    window.addEventListener('scroll', onWindowChange);

    return () => {
      window.removeEventListener('resize', onWindowChange);
      window.removeEventListener('scroll', onWindowChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerIsHidden]);

  if (bannerIsHidden) return null;

  return (
    <Wrapper ref={ref}>
      <Text $weight="500" $mobileSize="text-xs">
        {message}
      </Text>

      <Actions>{actions}</Actions>

      <Button
        type="button"
        onClick={hideBanner}
        label="Close"
        icon="ph-bold ph-x"
        size="small"
        className="close-button"
        fill="ghost"
      />
    </Wrapper>
  );
};
