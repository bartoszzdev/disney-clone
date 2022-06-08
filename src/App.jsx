import { useState, useEffect, useRef } from 'react'

// SECTIONS
import Header from './assets/sections/Header/index';
import MainContainer from './assets/sections/Main/index';
import PlanosSection from './assets/sections/Planos/index';
import InfoSection from './assets/sections/Info/index';
import MovieSection from './assets/sections/Movies/index';
import DownloadSection from './assets/sections/Download/index';
import AccessibilitySection from './assets/sections/Accessibility/index';
import QuestionSection from './assets/sections/Questions/index';

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const plansSection = useRef(null)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > plansSection.current.offsetTop - 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    })
  }, [])

  const scrollDown = () => {
    scroll({
      top: plansSection.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>
      <Header showNavbar={showNavbar} />
      <MainContainer scrollDown={scrollDown} />
      <PlanosSection plansSection={plansSection} />
      <InfoSection />
      <MovieSection />
      <DownloadSection />
      <AccessibilitySection />
      <QuestionSection />
    </>
  )
}

export default App