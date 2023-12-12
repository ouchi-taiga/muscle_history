import React, {useState, useEffect, useRef} from 'react'
import { UserIcon } from '../index.js'
import styles from './DropdownMenu.module.css'
import { auth } from '../../firebase'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, []);

  const handleOutsideClick = (e) => {
    if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
      setIsOpen(false)
    }
  }

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdownMenuArea}>
      <UserIcon
        onClick={onClick}
      />

      {isOpen && 
        <div className={styles.dropdownMenu}>
          <ul className={styles.dropdownMenuList}>
            <li>
              メールアドレス
            </li>
            <li>
              未定
            </li>
            <li
              onClick={() => auth.signOut()}
            >
              サインアウト
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default DropdownMenu