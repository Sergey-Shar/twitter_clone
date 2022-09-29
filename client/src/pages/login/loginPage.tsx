import { Context } from 'app/context';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { styles } from './styles';

const BACKGROUND_URL =
	'https://i.pinimg.com/564x/6e/a2/2f/6ea22f0f8cd31cdc1835ead0e6b32994.jpg';

const LoginPage = ({ arr }: { arr?: string }) => {
  const { authStore } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.isAuth) navigate('/home', { replace: true });
  }, [authStore.isAuth, navigate]);

  return (
    <div className="flex w-full h-screen ">
      <div
        className="h-screen 
      w-[45%] bg-no-repeat
      bg-[url('https://i.pinimg.com/564x/6e/a2/2f/6ea22f0f8cd31cdc1835ead0e6b32994.jpg')]"></div>
      <div className="bg-black h-screen w-[55%] pl-7 pt-10">
        <h1 className=" tracking-wide text-7xl font-bold text-white mb-10">
					В курсе происходящего
        </h1>
        <h3 className=" tracking-wide text-2xl font-bold text-white mb-10">
					Присоединяйтесь к нам прямо сейчас!
        </h3>
        <Link to="signup">
          <button className={styles.singupBtn}>Зарегестрируйтесь</button>
        </Link>
        <p
          className="
        text-white text-lg mb-2">
					Уже зарегистрированы?
        </p>
        <Link to="login">
          <button className={styles.loginBtn}>Войти</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default observer(LoginPage);
