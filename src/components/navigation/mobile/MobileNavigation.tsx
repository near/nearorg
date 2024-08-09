import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NearIcon from '../icons/near-icon.svg';
import { Menu } from './Menu';
import s from './MobileNavigation.module.scss';

export const MobileNavigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

  const openMenu = () => {
    setMenuIsVisible(true);
  };

  const toggleMenu = () => {
    if (menuIsVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <header className={s.wrapper}>
      <div className={s.navigation}>
        <Link className={s.logo} href="/" onClick={closeMenu}>
          <Image src={NearIcon} alt="NEAR" />
        </Link>

        <button type="button" className={s.menuButton} aria-label="Menu" onClick={toggleMenu}>
          {menuIsVisible ? <i className="ph ph-x" /> : <i className="ph ph-list" />}
        </button>
      </div>

      <Menu isVisible={menuIsVisible} onCloseMenu={closeMenu} />
    </header>
  );
};
