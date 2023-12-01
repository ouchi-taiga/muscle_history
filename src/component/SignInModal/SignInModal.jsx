import React from 'react'
import styles from './SignInModal.module.css'
import { MailInputForm, PasswordInputForm, ButtonWithIcon, RightArrowIcon, GoogleIcon } from '../index.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'


const SignInModal = (props) => {
  const className  = styles[props.className];

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

  return (
    <div className={className}>
      <Tabs
        className={styles.tabs}
        onSelect={handleSelect}
        defaultIndex={0}
        selectedTabClassName={styles.activeTab}
      >
        <TabList  className={styles.tabList}>
          <div className={styles.title}></div>
          <Tab className={styles.tabListButton1}>Sign in</Tab>
          <Tab className={styles.tabListButton2}>Sign up</Tab>
        </TabList>

        <TabPanel className={styles.tabPanel}>
          <div className={styles.signInTabContent}>
            <div className={styles.mailInputForm}>
              <MailInputForm />
            </div>
            <div className={styles.passwordInputForm}>
              <PasswordInputForm />
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
                // onClick={}
                buttonStyle={googleSignInButtonStyle}
                iconStyle={googleSignInButtonIconStyle}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel className={styles.tabPanel}>
          <div className={styles.signUpTabContent}>
            <div className={styles.mailInputForm}>
              <MailInputForm />
            </div>
            <div className={styles.passwordInputForm}>
              <PasswordInputForm />
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