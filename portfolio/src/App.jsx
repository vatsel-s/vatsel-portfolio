import Hero from './pages/Hero/Hero'
import Sidenav from './layout/Sidenav'
import Imade from './pages/Experience/Imade'
import ExperienceHeader from './pages/Experience/ExperienceHeader'
import Electrocardiogram from './pages/Experience/Electrocardiogram'
import Narb from './pages/Experience/Narb'
import './App.css'

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Hero />
      <ExperienceHeader />
      <Narb />
      <Imade />
      <Electrocardiogram />
    </div>
  )
}

export default App
