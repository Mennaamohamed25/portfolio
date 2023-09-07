import HeaderSection from './components/HeaderSection';
import Navbar from './components/Navbar';
import AboutSection from './Components/About';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
     <div className='container mt-24 mx-auto px-12 py-4'>
      <HeaderSection/>
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection/>
      <EmailSection />
     </div>
     <Footer />
    </main>
  )
}
