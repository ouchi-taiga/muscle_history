import React from 'react'
import { PiUserCircleThin } from "react-icons/pi"
import styles from './UserIcon.module.css'

const UserIcon = (props) => {
  return (
    <>
      <PiUserCircleThin
        className={styles.userIcon}
        onClick={props.onClick}
      />
    </>
  )
}

export default UserIcon