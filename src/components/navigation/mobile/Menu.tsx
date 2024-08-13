import React from 'react';

import { AccordionMenu } from './AccordionMenu';
import s from './Menu.module.scss';

type Props = {
  isVisible: boolean;
  onCloseMenu: () => void;
};

export function Menu(props: Props) {
  return (
    <div className={s.menu} data-visible={props.isVisible}>
      <div className={s.innerWrapper}>
        <AccordionMenu onCloseMenu={props.onCloseMenu} />
      </div>
    </div>
  );
}
