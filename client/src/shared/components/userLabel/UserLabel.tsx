
import { FC } from 'react';

interface UserLabelProps {
	username: string;
	userEmail: string;
	avatar: React.ReactNode;
}
export const UserLabel: FC<UserLabelProps> = ({
  username,
  userEmail,
  avatar,
}) => {
  return (
    <div
      className="group flex items-center" >
      {avatar}
      {
        <div className="ml-3">
          <p className="text-sm font-medium text-slate-300 text-start text-white ">
            {username}
          </p>
          <p className="text-gray text-sm font-medium text-slate-500">
            {userEmail}
          </p>
        </div>
      }
    </div>
  );
};
