import React from 'react'
import style from "./Button.module.css"

const Button = ({text,icon,isSecondary}) => {
  return (
    <button  className={isSecondary ? style.button_secondary : style.button_primary}>
      {icon}
      {text}
    </button>
  )
}

export default Button
