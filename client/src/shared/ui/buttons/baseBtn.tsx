import { FC } from 'react';

interface BaseButtonProps {
	children?: React.ReactNode;
	text?: string;
	backgraund: string;
	backgraundHover: string;
}

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  backgraund,
  backgraundHover,
  text,
}) => {
  return (
    <button
      className={`px-3 py-2 rounded-full
        transition duration-500
        bg-${backgraund}
        cursor-pointer hover:bg-${backgraundHover}`}>
      {children}
      {text}
    </button>
  );
};
