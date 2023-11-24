import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from './SignInButton.module.css'

const SignInButton = (props) => {
  return (
    <>
      <button
        className={styles.signInButton}
        onClick={props.onClick}
      >
        <div className={styles.titleArea}>
          <div className={styles.title}>はじめる</div>
          <MdArrowForwardIos
            className={styles.rightArrow}
            size={'2.3rem'}
          />
        </div>
      </button>
    </>
  )
}

export default SignInButton