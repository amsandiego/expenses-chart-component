import styles from './Footer.module.css';
import { data } from '../data/data';

function Footer() {
  const sum = data.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.footerSmall}>Total this month</p>
        <p className={styles.footerBig}>{`$${sum}`}</p>
      </div>
      <p className={styles.value}>
        +2.4% <span className={styles.spanValue}>from last month</span>
      </p>
    </footer>
  );
}

export default Footer;
