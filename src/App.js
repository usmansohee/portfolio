import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experiences from './components/Experiences/Experiences'
import Educations from './components/Educations/Educations'
import Feedbacks from './components/Feedbacks/Feedbacks'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Educations />
        <Feedbacks/>
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
    //
  )
}

export default App
