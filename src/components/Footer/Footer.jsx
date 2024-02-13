import React from 'react'
import './Footer.css'
import themeContext from '../../context/themeContext'
import { useContext } from 'react'
const Footer = () => {
  const { theme } = useContext(themeContext)
  return (
    <div className={`${theme}footer footer`} >
      <p >
        Tech OverFlow &copy; 2021
      </p>
       <div className="socialLinks">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="https://freepngimg.com/save/141183-logo-circle-facebook-download-free-image/2400x2400" width={'25px'} height={'25px'} alt="" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/3488/3488290.png" width={'25px'} height={'25px'} alt="" />
        </a>
        
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/3488/3488290.png" width={'25px'} height={'25px'} alt="" />
        </a>
       </div>

    </div>
  )
}

export default Footer