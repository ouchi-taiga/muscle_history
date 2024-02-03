import React, {useState} from 'react'
import { CalendarHeader, CalendarSideBar, CalendarBody } from '../index.js'
import { getMonth, getDay } from './CalendarUtil.jsx'
import styles from './Calendar.module.css'

const Calendar = () => {
  const [currentMonth, setCurrrentMonth] = useState(getMonth());
  const [currentDay, setCurrentDay] = useState(getDay())

  return (
    <div className={styles.container}>
      <CalendarHeader />
      <div>
        <CalendarSideBar />
        <CalendarBody
          month={currentMonth}
          currentDay={currentDay}
        />
      </div>
    </div>
  )
} 

export default Calendar