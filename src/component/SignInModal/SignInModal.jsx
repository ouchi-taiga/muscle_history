import React from 'react'
import styles from './SignInModal.module.css'
import { SubmitButton, MailInputForm, PasswordInputForm, GoogleSignInButton } from '../index.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'


const SignInModal = (props) => {
  const className  = styles[props.className];

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
            <div className={styles.submitButton}>
              <SubmitButton />
            </div>
            <hr className={styles.horizontalLine}/>
            <div className={styles.googleSignInButton}>
              <GoogleSignInButton />
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
            <div className={styles.submitButton}>
              <SubmitButton />
            </div>
            <hr className={styles.horizontalLine}/>
            <div className={styles.googleSignInButton}>
              <GoogleSignInButton />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SignInModal