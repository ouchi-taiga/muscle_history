import React from 'react'
import styles from './CalendarBody.module.css'

const CalendarBody = (props) => {
  const { month, currentDay } = props;
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className={styles.container}>
      <header className={styles.weekDays}>
        {weekDays.map((dayOfWeek, index) => (
          <div className={styles.weekDay} key={index}>{dayOfWeek}</div>
        ))}
      </header>
      <div className={styles.calendarBody}>
        {month.map((week, weekIndex) => (
          <p className={styles.week} key={weekIndex}>
            {week.map((day, dayIndex) => (
              day.format('D') === currentDay.toString()
              ? <div className={styles.currentDay} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
              : <div className={styles.day} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
            ))}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CalendarBody