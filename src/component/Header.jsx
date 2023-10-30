import React from 'react'
import { UserIcon } from './index.js'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>筋肉歴</h3>
      </div>
      <UserIcon />
    </header>
  )
}

export default Header