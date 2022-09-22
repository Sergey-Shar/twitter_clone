import { FC, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { styles } from './styles';

interface PopupProps {
	children: React.ReactNode;
}

const modalRoot = document.querySelector('#popup');

export const Popup: FC<PopupProps> = ({ children }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const navigate = useNavigate();

  useEffect(() => {
    modalRoot?.appendChild(element);
    return () => {
      modalRoot?.removeChild(element);
    };
  }, [element]);

  const onClose = () => {
    navigate(-1);
  };

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.body}>
        <button onClick={onClose} className={styles.closeBtn}>
          <span className="text-3xl text-white">&times;</span>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    element,
  );
};
