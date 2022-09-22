import React, { FC, useMemo } from 'react';

import { styles } from './styles';

interface InputProps {
	placeholder: string;
	type: string;
	label?: string | null;
	errorMessge?: string;
	register?: object;
  isError?: boolean;
  children?: React.ReactNode
  ariaInvalid?:boolean
}

export const FormInput: FC<InputProps> = ({
  placeholder,
  type,
  label,
  errorMessge,
  register,
  isError,
  children,
  ariaInvalid,

}) => {
  const labelText = useMemo(
    () => (isError ? 'text-red' : 'text-blue'),
    [isError],
  );

  return (
    <label className="relative block">
      <input
        className={isError ? styles.inputError : styles.input}
        placeholder={placeholder}
        type={type}
        aria-invalid={ariaInvalid}
        {...register}
      />
      <span
        className={`invisible peer-focus:visible ${labelText}
        absolute left-3 top-[5px] text-sm font-medium text-slate-700`}>
        {label}
      </span>
      <div className="h-8">
        {isError && <p role="alert" className={styles.errorMessage}>{errorMessge}</p>}
      </div>
      {children}
    </label>
  );
};
