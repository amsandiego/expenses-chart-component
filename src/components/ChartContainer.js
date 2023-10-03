import styles from './ChartContainer.module.css';
import MyBarChart from './MyBarChart';
import Footer from './Footer';

function ChartContainer() {
  return (
    <div className={styles.chartContainer}>
      <p className={styles.header}>Spending - Last 7 days</p>
      <MyBarChart />
      <div className={styles.horizontalLine}></div>
      <Footer />
    </div>
  );
}

export default ChartContainer;
