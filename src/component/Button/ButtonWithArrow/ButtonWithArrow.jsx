import React from 'react'
import './ButtonWithArrow.css'

const ButtonWithArrow = (props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <button
        className={props.className}
        onClick={props.onClick}
        >{props.name}
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
    </>
  )
}

export default ButtonWithArrow