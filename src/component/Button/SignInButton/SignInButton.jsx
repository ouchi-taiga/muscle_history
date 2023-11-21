import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from './SignInButton.module.css'

const SignInButton = (props) => {
  return (
    <>
      <button
        className={styles.signInButton}
        onClick={props.onClick}
        >{props.name}
        <span>
          <MdArrowForwardIos
            className={styles.rightArrow}
          />
        </span>
      </button>
    </>
  )
}

export default SignInButton