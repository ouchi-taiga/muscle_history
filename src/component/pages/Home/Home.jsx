import React from 'react'
import { Header, Calendar, List } from '../../index.js'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.calendar}>
          <Calendar />
        </div>
        <div className={styles.list}>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home