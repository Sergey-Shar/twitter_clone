import { FC } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface AvatarProps {
	image: string;
	width: string;
	height: string;
}

export const Avatar: FC<AvatarProps> = ({ image, height, width }) => {
  return (
    <div>
      {image ? (
        <img
          className={`shrink-0 
        h-${height} w-${width} rounded-full`}
          src={image}
          alt="avatar"></img>
      ) : (
        <AccountCircleIcon color="info" fontSize="large" />
      )}
    </div>
  );
};
