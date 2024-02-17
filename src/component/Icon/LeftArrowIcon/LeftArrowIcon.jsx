import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md"
import styles from './LeftArrowIcon.module.css'


const LeftArrowIcon = () => {
  return (
    <>
      <MdArrowBackIosNew
        className={styles.leftArrowIcon}
      />
    </>
  )
}

export default LeftArrowIcon