import { Outlet } from 'react-router-dom';

import  AppBar  from './Appbar';
import  SideBar  from './Sidebar';
import { styles } from './styles';

export const Layout = () => {
  return (
    <div className={styles.layot}>
      <SideBar />
      <AppBar />
      <div className={styles.container} >
        <Outlet/>
      </div>
    </div>
  );
};