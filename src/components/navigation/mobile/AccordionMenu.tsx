import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';

import { navigationCategories } from '../categories';
import s from './AccordionMenu.module.scss';

type Props = {
  onCloseMenu: () => void;
};

export const AccordionMenu = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <Link className={s.nearAiLink} href="/ai" onClick={props.onCloseMenu}>
        Near AI
        <i className="ph-fill ph-star-four" />
      </Link>

      <Accordion.Root type="multiple">
        {navigationCategories
          .filter((category) => category.visible === 'all' || category.visible === 'mobile')
          .map((category) =>
            category.url ? (
              <Link key={category.title} className={s.nearAiLink} href={category.url} onClick={props.onCloseMenu}>
                {category.title}
              </Link>
            ) : (
              <Accordion.Item value={category.title} key={category.title}>
                <Accordion.Header className={s.accordionHeader}>
                  <Accordion.Trigger className={s.accordionTrigger}>
                    {category.title}
                    <i className="ph-bold ph-caret-down" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className={s.accordionContent}>
                  {category.sections.map((section) => (
                    <div className={s.section} key={section.title}>
                      {section.title && <span className={s.sectionTitle}>{section.title}</span>}

                      {section.links.map((link) => (
                        <div className={s.subSection} key={link.title}>
                          <i className={`${s.icon} ${link.icon}`} />
                          <Link
                            href={link.url}
                            target={link.url.indexOf('http') === 0 ? '_blank' : undefined}
                            key={link.title}
                            onClick={props.onCloseMenu}
                          >
                            {link.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            ),
          )}
      </Accordion.Root>
    </div>
  );
};
