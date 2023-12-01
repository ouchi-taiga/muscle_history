import React from 'react'
import { CiMail } from "react-icons/ci"
import styles from './MailIcon.module.css'

const MailIcon = () => {
  return (
    <>
      <CiMail 
        className={styles.mailIcon}
      />
    </>
  )
}

export default MailIcon