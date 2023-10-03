import styles from './CustomTooltip.module.css';

function CustomTooltip(data) {
  const { active, payload } = data;

  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipText}>{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
