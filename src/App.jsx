import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedMode)
    if (savedMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
