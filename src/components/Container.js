import styles from './Container.module.css';
import Main from './Main';

function Container() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}

export default Container;
