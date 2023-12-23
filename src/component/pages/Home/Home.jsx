import React from 'react'
import { Header } from '../../index.js'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
    </div>
  )
}

export default Home