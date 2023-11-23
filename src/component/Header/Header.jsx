import React from 'react'
import { SiteIcon } from '../index.js'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.headerLogo}>
        <SiteIcon
          className='siteIcon'
        />
        <div>筋肉歴</div>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.aboutSite}>
            About
          </li>
          <li className={styles.userIcon}>
            UserIcon
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header