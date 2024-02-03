import React from 'react'
import { Header, Calendar } from '../../index.js'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  )
}

export default Home