import { GraduationCap, BookOpen } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './Education.css';

const educationList = [
  {
    icon: GraduationCap,
    institution: 'Sinhgad Institute of Technology',
    qualification: 'Bachelor of Engineering (B.E.)',
    field: 'Information Technology',
    period: '2012–2015',
  },
  {
    icon: BookOpen,
    institution: 'G.P.V. Nanded',
    qualification: 'Diploma in Engineering',
    field: 'Information Technology',
    period: '2008–2011',
  },
];

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader id="education-title" title="Education" />

        <div className="education__grid">
          {educationList.map(({ icon: Icon, institution, qualification, field, period }, index) => (
            <Reveal as="article" className="education__card" key={institution} delay={index * 150}>
              <span className="education__icon"><Icon size={26} aria-hidden="true" /></span>
              <div>
                <h3>{institution}</h3>
                <p className="education__qualification">{qualification}</p>
                <p>{field}</p>
                <p className="education__period">{period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
