import React from 'react'
import { CiLock } from "react-icons/ci"
import styles from './PasswordIcon.module.css'

const PasswordIcon = () => {
  return (
    <>
      <CiLock
        className={styles.passwordIcon}
      />
    </>
  )
}

export default PasswordIcon