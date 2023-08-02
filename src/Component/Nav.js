import React, { useEffect, useState } from 'react'

function Nav() {
    const [theme,setTheme]=useState("Light")
    useEffect(()=>
    {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme)
    },[theme])
  return (
    <header>
        <h1>TaskMate.io</h1>
        <div className='themeSelector'>
            <span onClick={()=>setTheme("Light")} className={theme==="Light" ? "Light circle active": "Light circle"}></span>
            <span onClick={()=>setTheme("Medium")} className={theme==="Medium" ? "Medium circle active": "Medium circle"}></span>
            <span onClick={()=>setTheme("Dark")} className={theme==="Dark" ? "Dark circle active": "Dark circle"}></span>

            <span></span>
        </div>

    </header>
  )
}

export default Nav