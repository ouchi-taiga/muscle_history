import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from './SubmitButton.module.css'

const SubmitButton = (props) => {
  return (
    <>
      <button
        className={styles.submitButton}
      >
        <div className={styles.titleArea}>
          <div className={styles.title}>Enter</div>
          <MdArrowForwardIos
            className={styles.rightArrow}
            size={'2.3rem'}
          />
        </div>
      </button>
    </>
  )
}

export default SubmitButton