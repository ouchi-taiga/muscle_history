import React from 'react'
import styles from './SignInTabs.module.css'
import { SubmitButton, MailInputForm, PasswordInputForm, GoogleSignInButton } from '../../index.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const SignInTabs = () => {
  const handleSelect = (index, last) => {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  return (
    <div className={styles.TabContentArea}>


      <Tabs
        className={styles.tabs}
        onSelect={handleSelect}
        defaultIndexIndex={0}
        selectedTabClassName={styles.activeTab}
      >
        <TabList
          className={styles.tabList}
        >
          <div className={styles.title}></div>
          <Tab className={styles.tabListButton1}>Sign in</Tab>
          <Tab className={styles.tabListButton2}>Sign up</Tab>
        </TabList>

        <TabPanel className={styles.tabPanelContent1}>
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
        </TabPanel>
        <TabPanel className={styles.tabPanelContent2}>
          test
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SignInTabs