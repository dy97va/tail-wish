import React from 'react'
import { FiInstagram, FiPhone, FiMail } from "react-icons/fi";
import '../styles/Footer.css'


export const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact-info'>
        <div className='contact-item'>
          <FiInstagram className='contact-icon'/>
          <a href="https://instagram.com" > Instagram </a>
        </div>
        <div className='contact-item'>
          <FiMail className='contact-icon'/>
          <a href="mailto:example@gmail.com"> example@gmail.com </a>
        </div>
        <div className='contact-item'>
          <FiPhone className='contact-icon'/>
          <a href="tel.:+358461231212"> +358461231212 </a>
        </div>
      </div>
    </div>
  )
}