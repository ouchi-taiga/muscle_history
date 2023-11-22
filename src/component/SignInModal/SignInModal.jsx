import React from 'react'
import styles from './SignInModal.module.css'
import { SignInTabs } from '../index.js'


const SignInModal = (props) => {
  const className  = styles[props.className];

  return (
    <div className={className}>
      <SignInTabs />
    </div>
  )
}

export default SignInModal