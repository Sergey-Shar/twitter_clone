import { Context } from 'app/context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const HomePage = () => {
  const { authStore } = useContext(Context);
  
  return (
    <>
      <h1>{authStore.isAuth && `пользователь ${authStore.user.username} в сети`}</h1>
      <button onClick={() => authStore.logout()}>выйти</button>
    </>
  );
};

export default observer(HomePage);