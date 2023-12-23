import React from 'react'
import styles from './InputForm.module.css'

const InputForm = (props) => {
  return (
    <>
      <div className={styles.inputFormArea}>
        <input
          id={props.id}
          className={styles.inputForm}
          placeholder={props.placeholder}
          type={props.type}
          style={props.inputFormStyle}
          required={props.required}
          value={props.value}
          onChange={props.onChange}
          ref={props.refs}
        />
        <div
          className={styles.iconArea}
          style={props.iconStyle}
        >{props.icon}</div>
      </div>
    </>
  )
}

export default InputForm