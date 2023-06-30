import React from 'react'
import Navbar from './Section/Navbar/Navbar'
import Section2 from "./Section/Section2/Header"
import Section3 from './Section/section3/Header2'
import style from "./App.module.css"
function App() {
  return (
    <div className={style.main}>
    <Navbar/>
    <Section2/>
    <Section3/>
    </div>
  )
}

export default App