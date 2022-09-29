import React, { FC } from 'react';

import { styles } from './styles';

type TPosition = 'right' | 'left' | 'top' | 'bottom';

interface PopoversProps {
	children: React.ReactNode;
	placement: TPosition;
    headerContent?: React.ReactNode;
    bodyContent?:React.ReactNode
}

export const Popovers: FC<PopoversProps> = ({
  children,
  placement,
  headerContent,
  bodyContent,
}) => {
  return (
    <div
      className="relative
      ">
      <div className={`${styles[placement]}`}>
        <div className={styles.header}>{headerContent}</div>
        <div>{bodyContent }</div>
      </div>
      {children}
    </div>
  );
};
