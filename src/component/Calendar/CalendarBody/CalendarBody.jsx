import React from 'react'
import styles from './CalendarBody.module.css'

const CalendarBody = (props) => {
  const { month, activeYear, activeMonth, currentYear, currentMonth, currentDay } = props;
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

  const className = (day, dayIndex) => {
    if (activeYear === currentYear && activeMonth === currentMonth && day.format('D') === currentDay.toString()) {
      return styles.currentDay;
    }
    switch (dayIndex % 7) {
      case 0:
        return `${styles.day} ${styles.Sunday}`;
      case 6:
        return `${styles.day} ${styles.Saturday}`;
      default:
        return styles.day;
    }
    
  }

  return (
    <div className={styles.container}>
      {/* 曜日 */}
      <header className={styles.weekDays}>
        {weekDays.map((dayOfWeek, index) => (
          index === 0
          ? <div className={`${styles.weekDay} ${styles.Sunday}`} key={index}>{dayOfWeek}</div>
          : index === 6
            ? <div className={`${styles.weekDay} ${styles.Saturday}`} key={index}>{dayOfWeek}</div>
            : <div className={styles.weekDay} key={index}>{dayOfWeek}</div>
        ))}
      </header>

      <div className={styles.calendarBody}>
        {/* 週 */}
        {month.map((week, weekIndex) => (
          <div className={styles.week} key={weekIndex}>
            {/* 日 */}
            {week.map((day, dayIndex) => (
              // activeYear === currentYear && activeMonth === currentMonth && day.format('D') === currentDay.toString()
              // ? <div className={styles.currentDay} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
              // : (() => {
              //   switch (dayIndex % 7) {
              //     case 0:
              //       return <div className={`${styles.day} ${styles.Sunday}`} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>;
              //     case 6:
              //       return <div className={`${styles.day} ${styles.Saturday}`} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>;
              //     default:
              //       return <div className={styles.day} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>;
              //   }
              // })()
              <div
                className={className(day, dayIndex)}
                key={weekIndex * 7 + dayIndex}
              >
                {day.format('D')}
              </div>
              // : dayIndex % 7 === 0
              //   ? <div className={`${styles.day} ${styles.Sunday}`} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
              //   : dayIndex % 7 === 6
              //     ? <div className={`${styles.day} ${styles.Saturday}`} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
              //     : <div className={styles.day} key={weekIndex * 7 + dayIndex}>{day.format('D')}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarBody