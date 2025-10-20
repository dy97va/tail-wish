import React from 'react'
import { Navbar } from './Navbar'
import '../styles/HeroSection.css'
import dogHero from '../assets/dog1.png'
import { useTranslation } from 'react-i18next'

export const HeroSection = ({scrollToSection}) => {

  const { t } = useTranslation()

  return (
    <div className='hero-section'>
        <Navbar scrollToSection={scrollToSection}/>
        <div className='hero-section-content'>
          <div className='hero-content-left'>
          <h1>
            {t("hero.title")}
          </h1>
          <button onClick={()=>scrollToSection('products')}> {t("hero.cta")} </button>
          </div>
          <div className='hero-cat'>
            <img src={dogHero} alt="hello"/>
          </div>
        </div>
    </div>
  )
}
