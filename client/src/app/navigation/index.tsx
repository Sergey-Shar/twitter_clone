import { Layout } from 'features/layout';
import { Signup, LoginPopup } from 'pages';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PrivateOutlet = lazy(() => import('shared/utils/privateLayot'));
const HomePage = lazy(() => import('pages/home/HomePage'));
const LoginPage = lazy(() => import('pages/login/loginPage'));

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<LoginPopup />} />
      </Route>
      <Route path="/" element={<PrivateOutlet />}>
        <Route path="" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
