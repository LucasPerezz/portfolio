import AboutMe from '@/components/AboutMe/AboutMe'
import Education from '@/components/Education/Education'
import ParticlesBackgorund from '@/components/Particles/ParticlesBackground'
import Presentation from '@/components/Presentation/Presentation'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'



export default function Home() {
  return (
    <main className={`min-h-screen mx-auto flex flex-col items-center justify-center gap-2 p-10 bg-tansparent font-oswald`}>
      <ParticlesBackgorund />
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
    </main>
  )
}
