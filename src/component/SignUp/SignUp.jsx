import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import { Button, InputForm, RightArrowIcon, MailIcon, PasswordIcon } from '../index.js'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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

// サインアップボタン
const signUpButtonStyle = {
  width: '100%',
  height: '100%',
  color: 'rgb(44, 62, 80)',
  background: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgb(44, 62, 80)',
  borderRadius: '32px',
  cursor: 'pointer',
  fontSize: '2.2rem'
};

const signUpButtonIconStyle = {
  width: '2.3rem',
  height: '2.3rem'
};


const SignUp = () => {
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
  
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, mail, password);
      navigate('/')
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.signUpTabContent}>
          <div className={styles.messageArea}>
            アカウントを作成する
          </div>

          <div className={styles.mailInputForm}>
            <InputForm
              id={'mail'}
              placeholder={'mail'}
              icon={<MailIcon />}
              inputFormStyle={mailInputFormStyle}
              iconStyle={mailInputFormIconStyle}
              required={'required'}
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
              requierd={'required'}
              value={password}
              onChange={onChange}
            />
          </div>

          <div className={styles.signUpButton}>
            <Button
              type={'submit'}
              name={'アカウントを作成'}
              icon={<RightArrowIcon />}
              buttonStyle={signUpButtonStyle}
              iconStyle={signUpButtonIconStyle}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUp