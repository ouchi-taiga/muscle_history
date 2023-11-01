import React from 'react'
import { UserIcon } from './index.js'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>筋肉歴</p>
      </div>
      <UserIcon />
    </header>
  )
}

export default Header