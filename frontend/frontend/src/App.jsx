import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Marquee from './components/Marquee.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Expertise from './sections/Expertise.jsx';
import FeaturedTechnology from './sections/FeaturedTechnology.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import ProfessionalApproach from './sections/ProfessionalApproach.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <FeaturedTechnology />
        <Experience />
        <Education />
        <ProfessionalApproach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
