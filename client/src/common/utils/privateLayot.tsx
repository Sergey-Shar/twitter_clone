import { Context } from 'app/context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateOutlet = () => {
  const location = useLocation();
  const { authStore } = useContext(Context);

  return authStore.isAuth || authStore.pending ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default observer(PrivateOutlet);
