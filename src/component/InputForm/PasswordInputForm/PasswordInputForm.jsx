import React from 'react'
import './PasswordInputForm.css'

const PasswordInputForm = (props) => {
  return (
    <>
      <div className='passwordInputFormArea'>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <input
          type='password'
          className={props.className}
          placeholder='password'
        />
        <span class="material-symbols-outlined">
        {props.iconName}
        </span>
      </div>
    </>
  )
}

export default PasswordInputForm