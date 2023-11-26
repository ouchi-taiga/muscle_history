import React from 'react'
import { FcGoogle } from "react-icons/fc";
import styles from './GoogleSignInButton.module.css'

const GoogleSignInButton = (props) => {
    return (
      <>
        <button
          className={styles.googleSignInButton}
          onClick={props.onClick}
        >
          <div className={styles.titleArea}>
            <div className={styles.title}>Googleでサインイン</div>
            <FcGoogle
              className={styles.googleIcon}
              size={'2.3rem'}
            />
          </div>
        </button>
      </>
    )
  }

export default GoogleSignInButton