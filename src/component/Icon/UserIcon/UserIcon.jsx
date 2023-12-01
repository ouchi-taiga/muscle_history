import React from 'react'
import { PiUserCircleThin } from "react-icons/pi"
import { PiUserCircleDuotone } from "react-icons/pi";
import styles from './UserIcon.module.css'

const UserIcon = () => {
  return (
    <>
      <PiUserCircleThin
        className={styles.userIcon}
      />
    </>
  )
}

export default UserIcon