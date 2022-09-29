import { Context } from 'app/context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const HomePage = () => {
  const { authStore } = useContext(Context);
  
  return (
    <div>
      <button onClick={() => authStore.logout()}>выйти</button>

    </div>
  );
};

export default observer(HomePage);