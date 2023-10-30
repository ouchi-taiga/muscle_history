import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>Landing</div>
      <button onClick={()=>navigate('/signin')}>ログイン</button>
      <button onClick={()=>navigate('/signup')}>新規登録</button>
    </>
  )
}

export default Landing