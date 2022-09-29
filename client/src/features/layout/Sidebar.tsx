import { Context } from 'app/context';
import { Avatar, UserLabel } from 'shared/components';
import { BaseButton } from 'shared/ui/buttons/baseBtn';
import { Popovers } from 'shared/ui/popovers';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { styles } from './styles';

const SideBar = () => {
  const { authStore } = useContext(Context);
  const { username, email } = authStore.user;
  return (
    <div className={styles.sidebar}>
      <div className="text-white">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel?
      </div>
      <Popovers placement="top">
        <BaseButton backgraund={'black'} backgraundHover={'gray-dark'}>
          <UserLabel
            username={username}
            userEmail={email}
            avatar={
              <Avatar
                height="12"
                width="12"
                image={''}
              />
            }
          />
        </BaseButton>
      </Popovers>
    </div>
  );
};

export default observer(SideBar);
