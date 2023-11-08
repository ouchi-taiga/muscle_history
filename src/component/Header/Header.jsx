import React from 'react'
import { UserIcon } from '../index.js'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='headerLogo'>
        <p>筋肉歴</p>
      </div>
      <nav className='headerNav'>
        <ul className='headerList'>
          <li className='aboutSite'>
            このサイトについて
          </li>
          <li className='userIcon'>
            <UserIcon />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header