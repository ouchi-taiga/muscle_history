import React from 'react'
import { UserIcon } from '../index.js'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='title'>
        <p>筋肉歴</p>
      </div>
      <div className='userIcon'>
        <UserIcon />
      </div>
    </header>
  )
}

export default Header