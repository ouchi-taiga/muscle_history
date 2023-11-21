import React from 'react'
import { CiLock } from "react-icons/ci";
import styles from './PasswordInputForm.module.css'

const PasswordInputForm = (props) => {
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
            class={styles.passwordIcon}
            size={30}
          />
        </span>
      </div>
    </>
  )
}

export default PasswordInputForm