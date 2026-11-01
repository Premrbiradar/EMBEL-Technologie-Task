import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import './Stats.css';

// These numbers are simply counts of the items shown on this website.
const items = [
  { value: 7, label: 'Areas of expertise' },
  { value: 6, label: 'Roles in the career timeline' },
  { value: 2, label: 'Engineering qualifications' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Profile at a glance">
      <div className="container">
        <Reveal className="stats__card">
          {items.map((item) => (
            <div className="stats__item" key={item.label}>
              <strong><Counter to={item.value} /></strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
