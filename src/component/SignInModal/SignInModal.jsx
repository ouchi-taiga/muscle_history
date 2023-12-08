import React from 'react'
import styles from './SignInModal.module.css'
import { SignIn, SignUp } from '../index.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'



const SignInModal = (props) => {

  const handleSelect = (index, last) => {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
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
          <SignIn />
        </TabPanel>

        {/* タブ2のコンテンツ */}
        <TabPanel className={styles.tabPanel}>
          <SignUp />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SignInModal