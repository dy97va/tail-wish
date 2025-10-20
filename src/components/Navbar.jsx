import React, {useState, useEffect} from 'react'
import logo from  '../assets/navbar-logo.png'
import { useTranslation } from 'react-i18next'
import fiFlag from '../assets/fin-flag.png'
import ukFlag from '../assets/uk-flag.png'
import '../styles/Navbar.css'
import { FiMenu, FiX } from "react-icons/fi"

export const Navbar = ({ scrollToSection }) => {
  const {t, i18n} = useTranslation()

  const [menuOpen, setMenuOpen] = useState(false)

  const hadleNavLinkClciik = (section) => {
    scrollToSection(section)
    setMenuOpen(false)
    document.body.style.overflow = 'auto'

  }

  const changeLanguage = (language) => { 
    i18n.changeLanguage(language)
  }

  const handleMenuButtonCliclk = () => {
    if(menuOpen === false){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720 && menuOpen) {
        setMenuOpen(!menuOpen)
        document.body.style.overflow = 'auto'
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <ul className='navigation-menu'>
        <li className='navlink' onClick={()=>hadleNavLinkClciik('hero')}>{t("nav.about")}</li>
        <li className='navlink' onClick={()=>hadleNavLinkClciik('products')}>{t("nav.products")}</li>
        <li className='navlink' onClick={()=>hadleNavLinkClciik('contacts')}>{t("nav.contact")}</li>
      </ul>
      <div className='language-picker'>
        <button onClick={()=>changeLanguage("fi")}><img src={fiFlag} alt="" /></button>
        <button onClick={()=>changeLanguage("en")}><img src={ukFlag} alt="" /></button>
      </div>
      <button className='menu-toggle' onClick={()=>handleMenuButtonCliclk()}> { menuOpen ? <FiX/> : <FiMenu/> }</button>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <div className='mobile-language-picker'>
            <button onClick={()=>changeLanguage("fi")}><img src={fiFlag} alt="" /></button>
            <button onClick={()=>changeLanguage("en")}><img src={ukFlag} alt="" /></button>
          </div>
          <li onClick={()=>hadleNavLinkClciik('hero')}>{t("nav.about")}</li>
          <li onClick={()=>hadleNavLinkClciik('products')}>{t("nav.products")}</li>
          <li onClick={()=>hadleNavLinkClciik('contacts')}>{t("nav.contact")}</li>
          {/* <div className='mobile-language picker'>
            <button onClick={()=>changeLanguage("fi")}><img src={fiFlag} alt="" /></button>
            <button onClick={()=>changeLanguage("en")}><img src={ukFlag} alt="" /></button>
          </div> */}
          
        </ul>
      </div>
    </nav>
  )
}
