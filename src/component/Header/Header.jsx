import React from 'react'
import { SiteIcon, UserIcon } from '../index.js'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.headerLogo}>
        <SiteIcon />
        <div>筋肉歴</div>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.aboutSite}>
            About
          </li>
          <li className={styles.userIconArea}>
            <UserIcon />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header