import React from 'react'
import style from "./Custom.module.css"
function Custombutton(props) {
    const buttonStyle = props.style ? props.style : style.defaultButton;
  return (
    <div>
<button className={buttonStyle}>{props.btnlogo}{props.btntext}</button>
    </div>
  )
}

export default Custombutton