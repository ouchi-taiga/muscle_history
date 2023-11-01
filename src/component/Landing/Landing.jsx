import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Button } from '../index.js'
import './Landing.css'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className='landingContentsArea'>
        <p className='explanation'>
          筋肉歴へようこそ。
          <br/>
          ここではあなたが行ったトレーニングの記録をとることができます。
          <br/>
          日々の成果を残して筋肉を成長させていきましょう。
        </p>
        <Button
          className='signInButton'
          name={'ログイン'}
          onClick={() => navigate('/signin')}
        />
        <Button
          className='signUpButton'
          name={'新規登録'}
          onClick={()=>navigate('/signup')}
        />
      </div>
    </>
  )
}

export default Landing