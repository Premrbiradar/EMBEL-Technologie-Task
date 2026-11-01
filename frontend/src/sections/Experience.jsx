import { useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './Experience.css';

// Data is kept exactly as supplied. Edit here to update the timeline.
const experienceList = [
  {
    company: 'Embel Technologies Pvt. Ltd.',
    position: 'Executive Director',
    period: 'May 2016 – Present',
    location: 'Pune Division, Maharashtra, India',
  },
  { company: 'Param Business Solutions', position: 'Senior Business Consultant', period: 'June 2018 – June 2023' },
  { company: 'Param Business Solutions', position: 'Business Consultant', period: 'July 2018 – January 2022' },
  { company: 'MoneySpring', position: 'Consultant', period: 'November 2018 – June 2022' },
  { company: 'MoneySpring', position: 'Consultant', period: 'October 2018 – January 2022' },
  { company: 'Cognizant', position: 'Associate Engineer', period: 'November 2015 – October 2016' },
];

export default function Experience() {
  const listRef = useRef(null);

  // The coloured line fills up as the visitor scrolls through the timeline.
  useEffect(() => {
    const update = () => {
      const list = listRef.current;
      if (!list) return;
      const box = list.getBoundingClientRect();
      const progress = (window.innerHeight * 0.65 - box.top) / box.height;
      list.style.setProperty('--fill', Math.min(1, Math.max(0, progress)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="experience" className="section section--light" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader id="experience-title" eyebrow="03 / Experience"
          title="Professional Experience" />

        <ol className="timeline" ref={listRef}>
          {experienceList.map((item, index) => (
            <Reveal as="li" direction="left" delay={80} className="timeline__item" key={`${item.company}-${index}`}>
              <span className="timeline__marker"><Building2 size={18} aria-hidden="true" /></span>
              <article className="timeline__card">
                <h3>{item.company}</h3>
                <p className="timeline__position">{item.position}</p>
                <p className="timeline__meta">{item.period}</p>
                {item.location && <p className="timeline__meta">{item.location}</p>}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
