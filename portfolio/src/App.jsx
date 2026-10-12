import Hero from './pages/Hero/Hero'
import HeroPage from './pages/Hero/HeroPage'
import Sidenav from './layout/Sidenav'
import EducationSection from './pages/Education/EducationSection'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects' 
import './App.css'

function App() {
  return (
    <div>
      <Sidenav />
      <section id = "home" className = "pt-20">
          <HeroPage />
      </section>
      <section id = "education" className = "scroll-mt-20">
        <EducationSection />
      </section>
      <section id = "experience" className = "scroll-mt-20">
        <Experience />
      </section>
      <section id = "projects" className = "scroll-mt-20">
        <Projects />
      </section>
      <section id = "skills" className = "scroll-mt-20">
        <Skills />
      </section>
    </div>
  )
}

export default App
