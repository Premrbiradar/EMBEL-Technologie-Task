import { Wrench, Calculator, Cpu, Factory, Database } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './About.css';

const focusAreas = [
  { icon: Wrench, label: 'Engineering consulting' },
  { icon: Calculator, label: 'Project estimation' },
  { icon: Cpu, label: 'AI, IoT, hardware and firmware' },
  { icon: Factory, label: 'Industrial automation' },
  { icon: Database, label: 'Data-driven business operations' },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          id="about-title"
          title="About Sumit Bandewar"
          subtitle="Engineering Expertise. Technology Innovation. Business Solutions."
        />

        <div className="about__grid">
          <Reveal className="about__text" direction="left">
            <p>
              Sumit Bandewar is the Executive Director at Embel Technologies Pvt. Ltd. His
              professional background includes engineering consulting, project estimation, and
              technology-driven business solutions.
            </p>
            <p>
              His focus includes initiatives involving AI, IoT, hardware, firmware, and software
              solutions, along with industrial automation and data-driven business operations.
            </p>
            <p>
              He works in an environment built on engineering expertise, technology integration,
              and practical solutions for business and industrial challenges.
            </p>
          </Reveal>

          <Reveal as="aside" direction="right" className="about__panel" aria-label="Key professional focus areas">
            <h3>Professional focus</h3>
            <ul>
              {focusAreas.map(({ icon: Icon, label }, index) => (
                <Reveal as="li" key={label} delay={150 + index * 90}>
                  <span className="about__icon"><Icon size={20} aria-hidden="true" /></span>
                  {label}
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
