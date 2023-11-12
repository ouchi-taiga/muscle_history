import React from 'react'
import { UserIcon, SiteIcon } from '../index.js'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='headerLogo'>
        <SiteIcon
          className='siteIcon'
        />
        <div>筋肉歴</div>
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