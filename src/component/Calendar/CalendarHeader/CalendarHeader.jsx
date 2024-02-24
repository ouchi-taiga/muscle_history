import React from 'react'
import styles from './CalendarHeader.module.css'
import { Button, LeftArrowIcon, RightArrowIcon } from '../../index.js'

const arrowButtonStyle = {
  width: '2.7rem',
  height: '2.2rem',
  background: 'none',
  border: 'none'
}

const arrowButtonIconStyle = {
  width: '100%',
  height: '100%',
  color: '#f2f2f2'
}

const CalendarHeader = (props) => {
  const {setActiveMonth, setActiveYear, activeYear, activeMonth} = props;

  // 1つ前の月を表示
  const handlePrevMonth = () => {
    const prevMonth = (activeMonth - 1) % 12;
    if (prevMonth === 0) {
      setActiveYear(activeYear - 1);
      setActiveMonth(12);
      return;
    }
    setActiveMonth(prevMonth);
  }

  // 1つ次の月を表示
  const handleNextMonth = () => {
    const nextMonth = (activeMonth + 1) % 12;
    if (nextMonth === 0) {
      setActiveMonth(12);
      return;
    } else if (nextMonth === 1) {
      setActiveYear(activeYear + 1);
    }
    setActiveMonth(nextMonth);
  }

  return (
    <header className={styles.header}>
      <span className={styles.title}>{activeYear + '年' + activeMonth + '月'}</span>
      <span className={styles.buttonArea}>
        <Button
          icon={<LeftArrowIcon />}
          onClick={handlePrevMonth}
          buttonStyle={arrowButtonStyle}
          iconStyle={arrowButtonIconStyle}
        />
        <Button
          icon={<RightArrowIcon />}
          onClick={handleNextMonth}
          buttonStyle={arrowButtonStyle}
          iconStyle={arrowButtonIconStyle}
        />
      </span>
    </header>
  )
}

export default CalendarHeader