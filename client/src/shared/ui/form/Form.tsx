import { FC, FormEventHandler } from 'react';

import { styles } from './styles';
interface FormProps {
	endpoint?: string;
  onSubmit: FormEventHandler<HTMLFormElement>
	children?: React.ReactNode;
  textBtn?: string;
  disabled?: boolean;
  title?: string;
}
export const Form: FC<FormProps> = ({
  endpoint,
  onSubmit,
  children,
  textBtn,
  disabled,
  title,
}) => {
  return (
    <form
      noValidate
      className=" flex flex-col items-center px-3 py-5"
      method="POST"
      action={`api/${endpoint}`}
      encType="application/x-www-form-urlencoded"
      onSubmit={onSubmit}>
      <div className={styles.title}>{title}</div>
      {children}
      <button
        disabled={disabled}
        className={styles.submitBtn} type="submit">
        {textBtn}
      </button>
    </form>
  );
};
