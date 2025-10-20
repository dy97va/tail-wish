import './App.css'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'
import Background from './components/Background'
import { ProductSection } from './components/ProductSection'

function App() {
    const scrollToSection = (id) => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }

  return (
    <>
    <Background/>
    <main>
      <section id='hero'>
        <HeroSection scrollToSection={ scrollToSection }/>
      </section>
      <section id='products'>
        <ProductSection scrollToSection={scrollToSection}/>
      </section>
      <section id='contacts'>
        <Footer/>
      </section>
    </main>
    </>
  )
}

export default App
