import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from './SubmitButton.module.css'

const SubmitButton = (props) => {
  return (
    <>
      <button
        className={styles.submitButton}
      >Enter
        <span>
          <MdArrowForwardIos
            className={styles.rightArrow}
          />
        </span>
      </button>
    </>
  )
}

export default SubmitButton