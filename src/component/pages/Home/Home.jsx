import React from 'react'
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