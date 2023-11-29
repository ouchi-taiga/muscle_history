import React from 'react'
import { FcGoogle } from "react-icons/fc";
import styles from './GoogleSignInButton.module.css'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase';

const GoogleSignInButton = () => {
  const SignInWithGoogle = () => {
    //Googleでサインイン
    signInWithPopup(auth, provider)
  }

  return (
    <>
      <button
        className={styles.googleSignInButton}
        onClick={SignInWithGoogle}
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