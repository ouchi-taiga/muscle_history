import React from 'react'
import styles from './ButtonWithIcon.module.css'

const ButtonWithIcon = (props) => {

  return (
    <>
      <button
        className={styles.button}
        onClick={props.onClick}
        style={props.buttonStyle}
      >
        <div className={styles.buttonContentArea}>
          <div
            className={styles.nameArea}
          >{props.name}</div>
          <div
            className={styles.iconArea}
            style={props.iconStyle}
          >{props.icon}</div>
        </div>
      </button>
    </>
  )
}

export default ButtonWithIcon