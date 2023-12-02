import React from 'react'
import styles from './SignInModal.module.css'
import { ButtonWithIcon, InputFormWithIcon, RightArrowIcon, GoogleIcon, MailIcon, PasswordIcon } from '../index.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { auth, provider } from '../../firebase'
import { signInWithRedirect } from 'firebase/auth'


const SignInModal = (props) => {
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


  const handleSelect = (index, last) => {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
  }

  const className  = styles[props.className];

  return (
    <div className={className}>
      <Tabs
        className={styles.tabs}
        onSelect={handleSelect}
        defaultIndex={0}
        selectedTabClassName={styles.activeTab}
      >
        {/* タブ */}
        <TabList  className={styles.tabList}>
          <div className={styles.title}></div>
          <Tab className={styles.tabListButton1}>Sign in</Tab>
          <Tab className={styles.tabListButton2}>Sign up</Tab>
        </TabList>

        {/* タブ1のコンテンツ */}
        <TabPanel className={styles.tabPanel}>
          <div className={styles.signInTabContent}>
            <div className={styles.messageArea}>
              すでにアカウントをお持ちですか？
            </div>

            <div className={styles.mailInputForm}>
              <InputFormWithIcon
                placeholder={'mail'}
                icon={<MailIcon />}
                inputFormStyle={mailInputFormStyle}
                iconStyle={mailInputFormIconStyle}
              />
            </div>

            <div className={styles.passwordInputForm}>
              <InputFormWithIcon
                placeholder={'password'}
                type={'password'}
                icon={<PasswordIcon />}
                inputFormStyle={passwordInputFormStyle}
                iconStyle={passwordInputFormIconStyle}
              />
            </div>

            <div className={styles.signInButton}>
              <ButtonWithIcon
                name={'サインイン'}
                icon={<RightArrowIcon />}
                // TODO: メールアドレスによるサインイン機能の実装
                // onClick={}
                buttonStyle={signInButtonStyle}
                iconStyle={signInButtonIconStyle}
              />
            </div>

            <hr className={styles.horizontalLine}/>

            <div className={styles.googleSignInButton}>
              <ButtonWithIcon
                name={'Googleでサインイン'}
                icon={<GoogleIcon />}
                // TODO: Googleによるサインイン機能の実装
                onClick={signInWithGoogle}
                buttonStyle={googleSignInButtonStyle}
                iconStyle={googleSignInButtonIconStyle}
              />
            </div>
          </div>
        </TabPanel>

        {/* タブ2のコンテンツ */}
        <TabPanel className={styles.tabPanel}>
          <div className={styles.signUpTabContent}>
            <div className={styles.messageArea}>
              アカウントを作成する
            </div>

            <div className={styles.mailInputForm}>
              <InputFormWithIcon
                placeholder={'mail'}
                icon={<MailIcon />}
                inputFormStyle={mailInputFormStyle}
                iconStyle={mailInputFormIconStyle}
              />
            </div>

            <div className={styles.passwordInputForm}>
              <InputFormWithIcon
                placeholder={'password'}
                type={'password'}
                icon={<PasswordIcon />}
                inputFormStyle={passwordInputFormStyle}
                iconStyle={passwordInputFormIconStyle}
              />
            </div>

            <div className={styles.signInButton}>
              <ButtonWithIcon
                name={'アカウントを作成'}
                icon={<RightArrowIcon />}
                // TODO: メールアドレスによるサインアップ機能の実装
                // onClick={}
                buttonStyle={signInButtonStyle}
                iconStyle={signInButtonIconStyle}
              />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SignInModal