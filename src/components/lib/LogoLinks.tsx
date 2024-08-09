/* eslint-disable @next/next/no-img-element */
import { Flex, Text } from '@near-pagoda/ui';
import Link from 'next/link';
import type { CSSProperties } from 'react';

import s from './LogoLinks.module.scss';

type Props = {
  label?: string;
  logos: {
    filter?: string;
    height?: string;
    image: string;
    name: string;
    url: string;
  }[];
  style?: CSSProperties;
};

export const LogoLinks = ({ label, logos, style }: Props) => {
  return (
    <Flex stack gap="xl" style={style}>
      {label && (
        <Text
          size="text-xs"
          weight="700"
          color="sand11"
          style={{
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          {label}
        </Text>
      )}

      <div className={s.logos}>
        {logos.map((logo) => (
          <Link
            href={logo.url}
            target="_blank"
            title={logo.name}
            style={{ height: logo.height, filter: logo.filter }}
            key={logo.name}
          >
            <img src={logo.image} alt={logo.name} />
          </Link>
        ))}
      </div>
    </Flex>
  );
};
