import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.css'
import { Button, InputForm, RightArrowIcon, GoogleIcon, MailIcon, PasswordIcon } from '../index.js'
import { auth, provider } from '../../firebase'
import { GoogleAuthProvider, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'


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
  cursor: 'pointer',
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
  cursor: 'pointer',
  fontSize: '1.8rem'
};

const googleSignInButtonIconStyle = {
  width: '2.3rem',
  height: '2.3rem'
};


const SignIn = () => {
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  })
  
  const { mail, password } = formData;
  const navigate = useNavigate();
  
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  getRedirectResult(auth)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user
    }).catch((error) => {
    });

  const onSubmit = async (e) => {
    // e.preventDefault()
    // try {
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     mail,
    //     password
    //   );
    //   if(userCredential.user){
    //     navigate('/');
    //   }
    // } catch(error) {
    //   console.log(error)
    // }
  }

  const signInWithGoogle = async (event) => {
    try {
      signInWithRedirect(auth, provider);
      navigate('/');
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
              value={mail}
              onChange={onChange}
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
              value={password}
              onChange={onChange}
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