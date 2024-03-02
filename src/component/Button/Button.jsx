import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

  return (
    <>
      <button
        className={styles.button}
        type={props.type}
        onClick={props.onClick}
        style={props.buttonStyle}
      >
        <div className={styles.buttonContentArea}>
          <div
            className={styles.textArea}
          >{props.text}</div>
          <div
            className={styles.iconArea}
            style={props.iconStyle}
          >{props.icon}</div>
        </div>
      </button>
    </>
  )
}

export default Button