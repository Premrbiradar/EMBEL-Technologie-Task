import Reveal from './Reveal.jsx';

// Reusable heading block used by every section.
export default function SectionHeader({ id, title, subtitle, eyebrow, center = false }) {
  return (
    <Reveal className={center ? 'section-header section-header--center' : 'section-header'}>
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
