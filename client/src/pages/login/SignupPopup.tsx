import { Context } from 'app/context';
import { useAlert } from 'shared/hooks/alert';
import { Popup } from 'shared/ui';
import { Progress } from 'shared/ui/progress/Progress';
import { SignupForm } from 'features/auth';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

const Signup = () => {
  const { authStore } = useContext(Context);
  const showAlert = useAlert();

  useEffect(() => {
    if (authStore.error) {
      showAlert(authStore.error);
      authStore.setError('');
    }
  }, [authStore, authStore.error, showAlert]);

  return (
    <Popup >
      {!authStore.pending ? <SignupForm /> : <Progress />}
    </Popup>
  );
};

export default observer(Signup);