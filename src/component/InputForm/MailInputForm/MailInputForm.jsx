import React from 'react'
import './MailInputForm.css'

const MailInputForm = (props) => {
  return (
    <>
      <div className='mailInputFormArea'>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <input
          className={props.className}
          placeholder='email'
        />
        <span class="material-symbols-outlined">
        {props.iconName}
        </span>
      </div>
    </>
  )
}

export default MailInputForm