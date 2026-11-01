import { Search, Compass, Rocket } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './ProfessionalApproach.css';

const steps = [
  { icon: Search, title: 'Understand', text: 'Understand the business requirement and identify the underlying challenge.' },
  { icon: Compass, title: 'Explore', text: 'Consider suitable engineering and technology approaches.' },
  { icon: Rocket, title: 'Deliver', text: 'Work toward practical solutions aligned with business and operational requirements.' },
];

export default function ProfessionalApproach() {
  return (
    <section className="section section--light" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeader
          id="approach-title"
          title="Turning Business Challenges into Practical Solutions"
          subtitle="A general professional approach relevant to engineering and technology consulting."
          center
        />

        <ol className="approach__steps">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" direction="zoom" delay={index * 160} className="approach__step" key={title}>
              <span className="approach__icon"><Icon size={28} aria-hidden="true" /></span>
              <h3><span className="approach__number">Step {index + 1}</span> {title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
