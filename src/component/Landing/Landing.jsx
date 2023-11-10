import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Button } from '../index.js'
import './Landing.css'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <p className='heading'>
            筋肉歴へようこそ。
          </p>
          <p className='introduction'>
            ここではあなたが行った<wbr/>トレーニングの記録を<wbr/>とることが<wbr/>できます。
            <br/>
            日々の成果を残して<wbr/>筋肉を成長させていきましょう。
          </p>
        </div>
        <div className='buttonArea'>
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
        <div className='backGround'>

        </div>
      </div>
    </>
  )
}

export default Landing