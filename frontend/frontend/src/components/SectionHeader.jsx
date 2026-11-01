import Reveal from './Reveal.jsx';

// Reusable heading block used by every section.
export default function SectionHeader({ id, title, subtitle, center = false }) {
  return (
    <Reveal className={center ? 'section-header section-header--center' : 'section-header'}>
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
