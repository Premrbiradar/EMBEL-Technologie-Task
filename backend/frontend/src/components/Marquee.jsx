import './Marquee.css';

const items = [
  'Engineering Consulting', 'Project Estimation', 'AI & IoT Solutions', 'Industrial Automation',
  'Hardware & Firmware', 'Software Solutions', 'Business Consulting',
];

// A slowly scrolling strip of focus areas. The list is repeated so the loop looks seamless.
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Areas of focus">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul className="marquee__list" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item}><span className="marquee__dot" />{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
