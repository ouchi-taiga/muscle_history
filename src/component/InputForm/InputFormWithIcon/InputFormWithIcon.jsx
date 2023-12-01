import React from 'react'
import styles from './InputFormWithIcon.module.css'

const InputFormWithIcon = (props) => {
  return (
    <>
      <div className={styles.inputFormArea}>
        <input
          className={styles.inputForm}
          placeholder={props.placeholder}
          type={props.type}
          style={props.inputFormStyle}
        />
        <div
          className={styles.iconArea}
          style={props.iconStyle}
        >{props.icon}</div>
      </div>
    </>
  )
}

export default InputFormWithIcon