import Image from 'next/image';
import Link from 'next/link';

import NearLogo from '../icons/near-logo.svg';
import s from './DesktopNavigation.module.scss';
import { MainNavigationMenu } from './MainNavigationMenu';

export const DesktopNavigation = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Link href="/" className={s.logo}>
          <Image priority src={NearLogo} alt="NEAR" />
        </Link>

        <MainNavigationMenu />
      </div>
    </div>
  );
};
