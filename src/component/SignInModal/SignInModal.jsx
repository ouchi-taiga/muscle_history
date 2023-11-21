import React from 'react'
import styles from './SignInModal.module.css'
import { SubmitButton, MailInputForm, PasswordInputForm } from '../index.js'

const SignInModal = (props) => {
  const className  = styles[props.className];

  return (
    <div className={className}>
      <MailInputForm
        className='mailInputForm'
        iconName='mail'
      />
      <PasswordInputForm
        className='passwordInputForm'
        iconName='lock'
      />
      <SubmitButton
        className='submitButton'
      />
    </div>
  )
}

export default SignInModal