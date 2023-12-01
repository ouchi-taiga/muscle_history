import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from './RightArrowIcon.module.css'

const RightArrowIcon = () => {
  return (
    <>
      <MdArrowForwardIos
        className={styles.rightArrowIcon}
      />
    </>
  )
}

export default RightArrowIcon