import styles from './Main.module.css';
import Header from './Header';
import ChartContainer from './ChartContainer';

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <ChartContainer />
    </main>
  );
}

export default Main;
