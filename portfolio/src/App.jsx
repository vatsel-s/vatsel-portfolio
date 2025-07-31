import Hero from './pages/Hero/Hero'
import Sidenav from './layout/Sidenav'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects' 
import './App.css'

function App() {
  return (
    <div>
      <Sidenav />
      <Hero/>
      <Experience />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
