import React, {useState, useEffect} from 'react'
import { CalendarHeader, CalendarBody } from '../index.js'
import { getMonth, getCurrentYear, getCurrentMonth, getCurrentDay } from './CalendarUtil.jsx'
import styles from './Calendar.module.css'

const Calendar = () => {
  const currentYear = getCurrentYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  
  // 現在表示している年
  const [activeYear, setActiveYear]= useState(currentYear);
  // 現在表示している月
  const [activeMonth, setActiveMonth] = useState(currentMonth)
  // 現在表示している月のカレンダー
  const [month, setMonth] = useState(getMonth(activeMonth));


  useEffect(() => {
    setMonth(getMonth(activeMonth - 1))
  }, [activeMonth])

  return (
    <div className={styles.container}>
      <CalendarHeader
        setActiveMonth={setActiveMonth}
        setActiveYear={setActiveYear}
        activeYear={activeYear}
        activeMonth={activeMonth}
      />
      <div>
        <CalendarBody
          month={month}
          activeYear={activeYear}
          activeMonth={activeMonth}
          currentYear={currentYear}
          currentMonth={currentMonth}
          currentDay={currentDay}
        />
      </div>
    </div>
  )
} 

export default Calendar