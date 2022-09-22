import { Context } from 'app/context';
import { Popup } from 'common/ui';
import { Progress } from 'common/ui/progress/Progress';
import { useAlert } from 'common/hooks/alert';
import { LoginForm } from 'features/auth';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

const LoginPopup = () => {
  const { authStore } = useContext(Context);
  const showAlert = useAlert();

  useEffect(() => {
    if (authStore.error) {
      showAlert(authStore.error);
      authStore.setError('');
    }
  }, [authStore, authStore.error, showAlert]);

  return (
    <Popup> 
      {!authStore.pending ? <LoginForm /> : <Progress />}
    </Popup>
  );
};
export default observer(LoginPopup);
