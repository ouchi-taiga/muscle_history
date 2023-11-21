import React from 'react'
import { CiMail } from "react-icons/ci";
import styles from './MailInputForm.module.css'

const MailInputForm = (props) => {
  return (
    <>
      <div className={styles.mailInputFormArea}>
        <input
          className={styles.mailInputForm}
          placeholder='email'
        />
        <span>
          <CiMail 
            className={styles.mailIcon}
            size={30}
          />
        </span>
      </div>
    </>
  )
}

export default MailInputForm