import { useState } from 'react';
import styles from './MyBarChart.module.css';
import { data } from '../data/data';
import CustomTooltip from './CustomTooltip';

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import getCurrentDay from '../utils/getCurrentDay';

function MyBarChart() {
  const [tooltipPosition, setTooltipPosition] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  function handleBarMouseOver(x, y, index) {
    setTooltipPosition({ x, y });
    setActiveIndex(index);
  }

  function handleBarMouseLeave() {
    setActiveIndex(null);
  }

  function getColorName(index, dayName) {
    console.log(index, activeIndex, dayName, getCurrentDay());
    if (index === activeIndex && dayName === getCurrentDay()) {
      return 'var(--color-primary-cyan-hover';
    } else if (index === activeIndex && dayName !== getCurrentDay()) {
      return 'var(--color-primary-soft-red-hover)';
    } else if (dayName === getCurrentDay()) {
      return 'var(--color-primary-cyan)';
    } else {
      return 'var(--color-primary-soft-red)';
    }
  }

  return (
    <div className={styles.barChartContainer}>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={330}
          height={260}
          barSize={31}
          data={data}
          margin={{
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey='day'
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontFamily: 'DM Sans, sans-serif',
              fill: 'var(--color-neutral-medium-brown)',
              dy: 6,
            }}
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={activeIndex !== null ? <CustomTooltip /> : null}
            position={{ x: tooltipPosition.x - 8, y: tooltipPosition.y - 50 }}
            isAnimationActive={true}
            wrapperStyle={{ display: activeIndex !== null ? 'block' : 'none' }}
          />
          <Bar
            dataKey='amount'
            fill='var(--color-primary-soft-red)'
            radius={[3, 3, 3, 3]}
            onMouseOver={(e, index) => {
              handleBarMouseOver(e.x, e.y, index);
            }}
            onMouseLeave={handleBarMouseLeave}
          >
            {data.map((day, index) => (
              <Cell
                key={day.day}
                cursor='pointer'
                fill={getColorName(index, day.day)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;
