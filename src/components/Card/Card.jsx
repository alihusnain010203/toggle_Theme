import React from 'react'
import './Card.css'
import { useContext } from 'react'
import themeContext from '../../context/themeContext'
const Card = () => {
  const { theme } = useContext(themeContext)
  return (
    <div className={`${theme}card card`}>

      <h2>Card Name:Card</h2>
      <p>Card content</p>
      <p> Description:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quae blanditiis nobis velit cumque consectetur dolore a eum reiciendis omnis quisquam hic error vel alias, ea consequatur dolorem laborum nam.</p>
    </div>
  )
}

export default Card