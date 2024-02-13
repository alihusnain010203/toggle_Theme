import React from 'react'
import { useContext } from 'react'
import themeContext from './context/themeContext';
import './App.css'
const Theme = () => {
    const theme = useContext(themeContext);
    console.log(theme);
  return (
    <div style={{width:'100vw',height:"80vh"}} className={`${theme}`}>
        <h1>Theme: {theme}</h1>
    </div>
  )
}

export default Theme