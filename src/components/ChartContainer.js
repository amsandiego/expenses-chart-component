import styles from './ChartContainer.module.css';
import MyBarChart from './MyBarChart';

function ChartContainer() {
  return (
    <div className={styles.chartContainer}>
      <p className={styles.header}>Spending - Last 7 days</p>
      <MyBarChart />
    </div>
  );
}

export default ChartContainer;
