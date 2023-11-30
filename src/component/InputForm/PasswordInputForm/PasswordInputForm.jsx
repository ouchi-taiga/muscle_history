import React from 'react'
import { CiLock } from "react-icons/ci";
import styles from './PasswordInputForm.module.css'

const PasswordInputForm = () => {
  return (
    <>
      <div className={styles.passwordInputFormArea}>
        <input
          type='password'
          className={styles.passwordInputForm}
          placeholder='password'
        />
        <span>
          <CiLock
            className={styles.passwordIcon}
            size={30}
          />
        </span>
      </div>
    </>
  )
}

export default PasswordInputForm