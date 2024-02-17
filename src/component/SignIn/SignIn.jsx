import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.css'
import { Button, InputForm, RightArrowIcon, GoogleIcon, MailIcon, PasswordIcon } from '../index.js'
import { auth, provider } from '../../firebase'
import { signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'


/**
 * スタイル
 */
// メール入力フォーム
const mailInputFormStyle = {
  padding: '0px 30px 9px 60px',
  width: 'calc(100% - 90px)',
  fontSize: '2.3rem',
  color: 'rgb(44, 62, 80)',
  border: 'none',
  borderBottom: '1px solid',
  borderColor: 'rgb(44, 62, 80)',
  background: 'rgba(0, 0, 0, 0)'
};

const mailInputFormIconStyle = {
  width: '3rem',
  height: '3rem',
};

// パスワード入力フォーム
const passwordInputFormStyle = {
  padding: '0px 30px 9px 60px',
  width: 'calc(100% - 90px)',
  fontSize: '2.3rem',
  color: 'rgb(44, 62, 80)',
  border: 'none',
  borderBottom: '1px solid',
  borderColor: 'rgb(44, 62, 80)',
  background: 'rgba(0, 0, 0, 0)'
};

const passwordInputFormIconStyle = {
  width: '3rem',
  height: '3rem',
};

// サインインボタン
const signInButtonStyle = {
  width: '100%',
  height: '100%',
  color: 'rgb(44, 62, 80)',
  background: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgb(44, 62, 80)',
  borderRadius: '32px',
  fontSize: '2.2rem'
};

const signInButtonIconStyle = {
  width: '2.3rem',
  height: '2.3rem'
};

// Googleサインインボタン
const googleSignInButtonStyle = {
  width: '100%',
  height: '100%',
  color: '#F2F2F2',
  background: 'rgba(44, 62, 80)',
  border: 'none',
  fontSize: '1.8rem'
};

const googleSignInButtonIconStyle = {
  width: '2.3rem',
  height: '2.3rem'
};


const SignIn = () => {

  const mailRef = useRef();
  const passwordRef = useRef();
  
  
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, mail, password);
      if(userCredential.user){
        navigate('/home');
      }
    } catch(error) {
      console.log(error);
    }
  }

  const signInWithGoogle = () => {
    try {
      signInWithRedirect(auth, provider);
      navigate('/home');
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.signInTabContent}>
          <div className={styles.messageArea}>
            すでにアカウントをお持ちですか？
          </div>

          <div className={styles.mailInputForm}>
            <InputForm
              id={'mail'}
              placeholder={'mail'}
              type={'mail'}
              icon={<MailIcon />}
              inputFormStyle={mailInputFormStyle}
              iconStyle={mailInputFormIconStyle}
              refs={mailRef}
            />
          </div>

          <div className={styles.passwordInputForm}>
            <InputForm
              id={'password'}
              placeholder={'password'}
              type={'password'}
              icon={<PasswordIcon />}
              inputFormStyle={passwordInputFormStyle}
              iconStyle={passwordInputFormIconStyle}
              refs={passwordRef}
            />
          </div>

          <div className={styles.signInButton}>
            <Button
              type={'submit'}
              name={'サインイン'}
              icon={<RightArrowIcon />}
              buttonStyle={signInButtonStyle}
              iconStyle={signInButtonIconStyle}
            />
          </div>

          <hr className={styles.horizontalLine}/>

          <div className={styles.googleSignInButton}>
            <Button
              name={'Googleでサインイン'}
              icon={<GoogleIcon />}
              onClick={signInWithGoogle}
              buttonStyle={googleSignInButtonStyle}
              iconStyle={googleSignInButtonIconStyle}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default SignIn