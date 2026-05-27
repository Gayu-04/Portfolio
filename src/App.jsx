import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { data } from './data'

export default function App() {
  return (
    <>
      <Navbar name={data.name} />
      <Hero data={data} />
      <About data={data} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
      <Contact data={data} />
    </>
  )
}
