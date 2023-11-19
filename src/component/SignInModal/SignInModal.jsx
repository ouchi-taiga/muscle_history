import React from 'react'
import './SignInModal.css'
import { SubmitButton, MailInputForm, PasswordInputForm } from '../index.js'

const SignInModal = () => {
  return (
    <div className='signInModalContent'>
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