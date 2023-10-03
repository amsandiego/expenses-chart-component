import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.balanceLabel}>My balance</p>
        <p className={styles.balance}>$921.48</p>
      </div>
      <img
        style={{ width: '55px', height: '55px' }}
        src='./logo.svg'
        alt='logo'
      ></img>
    </div>
  );
}

export default Header;
