import React from 'react'
import styles from './CalendarBody.module.css'

const CalendarBody = (props) => {
  const { month, activeYear, activeMonth, currentYear, currentMonth, currentDay } = props;
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

  const setDayClassName = (day, dayIndex) => {
    // 現在の日付かどうか
    if (activeYear === currentYear && activeMonth === currentMonth && day.format('D') === currentDay.toString()) {
      return styles.currentDay;
    }
    switch (dayIndex % 7) {
      // 土曜日
      case 0:
        return `${styles.day} ${styles.Sunday}`;
      // 日曜日
      case 6:
        return `${styles.day} ${styles.Saturday}`;
      default:
        return styles.day;
    }
  }

  // TODO: 選択した日の記録を見れるようにする
  const selectDay = (day) => {
    console.log(day)
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
              <div
                className={setDayClassName(day, dayIndex)}
                key={weekIndex * 7 + dayIndex}
                onClick={() => selectDay(day)}
              >{day.format('D')}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarBody