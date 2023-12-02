import React from 'react'
import styles from './Home.module.css'
import { auth } from '../../../firebase'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <button onClick={() => auth.signOut()}>サインアウト</button>
    </>
  )
}

export default Home