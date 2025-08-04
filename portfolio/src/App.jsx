import Hero from './pages/Hero/Hero'
import HeroPage from './pages/Hero/HeroPage'
import Sidenav from './layout/Sidenav'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects' 
import './App.css'

function App() {
  return (
    <div>
      <Sidenav />
      <section id = "home">
          <HeroPage />
      </section>
      <section id = "experience">
        <Experience />
      </section>
      <section id = "projects">
        <Projects />
      </section>
      <section id = "skills">
        <Skills />
      </section>
    </div>
  )
}

export default App
