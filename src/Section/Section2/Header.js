import React from 'react'
import style from "./Header.module.css"
import Custombutton from '../../Atom/Custombutton/Custombutton'
import {MdLocalPostOffice} from "react-icons/md"
import {FiLink} from "react-icons/fi"
import {CiLocationOn} from "react-icons/ci"
function Header() {
  return (
    <div className={style.main}>
    <p className={style.header}>Proident anim <strong>nor nulla iste.</strong> </p>
    <div className={style.section2}>
    <p className={style.subheader}>Minim modi yet omnis nor quia so minima.</p>
    <span className={style.buttons}>
    <Custombutton btntext='Ipsum Lorem' style={style.btn} btnlogo={<MdLocalPostOffice style={{fontSize:"1.9rem"}}/>} />
    <Custombutton btntext='Ipsum Lorem'  btnlogo={<FiLink style={{fontSize:"1.7rem"}}/>}/>
    <Custombutton btntext='Ipsum Lorem'  btnlogo={<CiLocationOn style={{fontSize:"1.7rem"}}/>}/>
    </span>
   
    </div>
    </div>
  )
}

export default Header