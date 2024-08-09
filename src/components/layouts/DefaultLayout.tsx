import { type ReactNode } from 'react';

import { Footer } from '../Footer';
import { Navigation } from '../navigation/Navigation';
import s from './DefaultLayout.module.scss';

interface Props {
  children: ReactNode;
}

export function DefaultLayout({ children }: Props) {
  return (
    <div className={s.wrapper}>
      <Navigation />

      <div className={s.content}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
