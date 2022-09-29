import { observer } from 'mobx-react-lite';

import { styles } from './styles';

const AppBar = () => {
  return (
    <div className={styles.appbar}>
      <div className={styles.main}>User</div>
      <div className={styles.search}>Search</div>
    </div>
  );
};

export default observer(AppBar);