import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';

import { recordMouseEnter } from '@/utils/analytics';

import { navigationCategories } from '../categories';
import s from './MainNavigationMenu.module.scss';

export const MainNavigationMenu = () => {
  const navTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as HTMLButtonElement;

    if (target.getAttribute('data-state') === 'open') {
      // When a nav trigger is already open and then clicked, we ignore the click to keep the nav dropdown open
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <header className={s.header}>
      <NavigationMenu.Root className={s.navRoot} delayDuration={0}>
        <NavigationMenu.List className={s.navList}>
          <NavigationMenu.Item className={s.navItem}>
            <Link href="/ai" className={s.nearAiLink}>
              Near AI
              <i className="ph-fill ph-star-four" />
            </Link>
          </NavigationMenu.Item>
          {navigationCategories
            .filter((category) => category.visible === 'all' || category.visible === 'desktop')
            .map((category) => (
              <NavigationMenu.Item className={s.navItem} key={category.title}>
                <NavigationMenu.Trigger
                  className={s.navTrigger}
                  onMouseEnter={recordMouseEnter}
                  onClick={navTriggerClick}
                >
                  {category.title}
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className={s.navContent}>
                  <div className={s.container}>
                    {category.sections.map((section) => (
                      <div className={s.section} key={section.title}>
                        {section.title && <span className={s.sectionTitle}>{section.title}</span>}

                        {section.links.map((link) => (
                          <div className={s.subSection} key={link.title}>
                            <i className={`${s.icon} ${link.icon}`} />
                            <NavigationMenu.Link asChild>
                              <Link
                                className={s.navLink}
                                href={link.url}
                                target={link.url.indexOf('http') === 0 ? '_blank' : undefined}
                              >
                                {link.title}
                              </Link>
                            </NavigationMenu.Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};
