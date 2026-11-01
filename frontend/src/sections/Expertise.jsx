import { Wrench, Calculator, Network, Factory, CircuitBoard, Code2, Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './Expertise.css';

const expertiseList = [
  { icon: Wrench, title: 'Engineering Consulting', text: 'Supporting engineering-focused business requirements through technical understanding and solution planning.' },
  { icon: Calculator, title: 'Project Estimation', text: 'Understanding project requirements and supporting estimation and planning activities.' },
  { icon: Network, title: 'AI & IoT Solutions', text: 'Exploring artificial intelligence and connected technologies for practical business and industrial applications.' },
  { icon: Factory, title: 'Industrial Automation', text: 'Technology-focused approaches to improving industrial processes and operational workflows.' },
  { icon: CircuitBoard, title: 'Hardware & Firmware', text: 'Integrated technology solutions involving hardware systems and firmware.' },
  { icon: Code2, title: 'Software Solutions', text: 'Software-driven approaches to business requirements and operational challenges.' },
  { icon: Briefcase, title: 'Business Consulting', text: 'Connecting business requirements with practical technology and engineering approaches.' },
];

// Gives CSS the mouse position: used for the spotlight and the 3D tilt.
function trackMouse(event) {
  const card = event.currentTarget;
  const box = card.getBoundingClientRect();
  const x = event.clientX - box.left;
  const y = event.clientY - box.top;
  card.style.setProperty('--mx', `${x}px`);
  card.style.setProperty('--my', `${y}px`);
  card.style.setProperty('--rx', `${((0.5 - y / box.height) * 10).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${((x / box.width - 0.5) * 10).toFixed(2)}deg`);
}
function resetMouse(event) {
  event.currentTarget.style.setProperty('--rx', '0deg');
  event.currentTarget.style.setProperty('--ry', '0deg');
}

export default function Expertise() {
  return (
    <section id="expertise" className="section section--light" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeader
          id="expertise-title"
          eyebrow="02 / Expertise"
          title="Areas of Expertise"
          subtitle="Engineering and technology approaches for business and industrial challenges."
        />

        <div className="expertise__grid">
          {expertiseList.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="article"
              className="expertise__card"
              key={title}
              delay={(index % 3) * 110}
              onMouseMove={trackMouse}
              onMouseLeave={resetMouse}
            >
              <span className="expertise__number" aria-hidden="true">0{index + 1}</span>
              <span className="expertise__icon"><Icon size={26} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
