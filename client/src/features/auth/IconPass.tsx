import { FC } from 'react';
import { RiEyeLine } from 'react-icons/ri';
import { RiEyeOffLine } from 'react-icons/ri';

import { styles } from './styles';

interface IconPassProp {
	showPass: boolean;
	onClick: () => void;
}
export const IconPassword: FC<IconPassProp> = ({ showPass, onClick }) => {
  return (
    <span onClick={onClick} className={styles.iconPassWrap}>
      {showPass ? (
        <RiEyeOffLine className={styles.iconPass} viewBox="0 0 20 50" />
      ) : (
        <RiEyeLine className={styles.iconPass} viewBox="0 0 20 50" />
      )}
    </span>
  );
};
