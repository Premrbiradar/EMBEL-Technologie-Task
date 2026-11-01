import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Network, Factory, CircuitBoard, ChevronDown } from 'lucide-react';
import './Hero.css';

const headingWords = ['Connecting', 'Engineering,', 'Technology', '&', 'Business.'];
const focusWords = [
  'Engineering Consulting', 'AI & IoT Solutions', 'Industrial Automation',
  'Hardware & Firmware', 'Software Solutions', 'Business Consulting',
];

// Types one focus area, pauses, deletes it, then moves to the next one.
function useTypewriter(words) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 35 : 70;
      if (!deleting && charIndex === word.length) { deleting = true; delay = 1500; }
      else if (deleting && charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

export default function Hero() {
  const typed = useTypewriter(focusWords);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Decorative background (hidden from screen readers) */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--blue" />
        <span className="hero__orb hero__orb--teal" />
        <svg className="hero__circuit" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <path d="M0 120 H180 L230 170 H420 L470 120 H800" />
          <path d="M0 300 H120 L170 350 H360 L410 300 H560 L610 350 H800" />
          <path d="M0 480 H260 L310 430 H520 L570 480 H800" />
          <circle cx="230" cy="170" r="5" /><circle cx="470" cy="120" r="5" />
          <circle cx="410" cy="300" r="5" /><circle cx="610" cy="350" r="5" />
          <circle cx="310" cy="430" r="5" /><circle cx="570" cy="480" r="5" />
        </svg>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Executive Director | Embel Technologies</p>

          <h1 id="hero-title">
            {headingWords.map((word, index) => (
              <span
                key={word}
                className={index > 1 ? 'hero__word hero__word--gradient' : 'hero__word'}
                style={{ animationDelay: `${0.15 + index * 0.12}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="hero__rotator" aria-label="Areas of focus">
            <span className="hero__rotator-label">Focus:</span>
            <span className="hero__typed" aria-hidden="true">{typed}</span>
            <span className="hero__caret" aria-hidden="true" />
          </p>

          <p className="hero__lead">
            Driving practical business solutions through engineering consulting, technology
            innovation, and industrial automation.
          </p>
          <p className="hero__intro">
            Sumit Bandewar is the Executive Director at Embel Technologies Pvt. Ltd., Pune, with a
            background in engineering consulting, project estimation, and business solutions.
          </p>

          <div className="hero__actions">
            <a href="#expertise" className="btn btn-primary btn-shine">
              Explore Expertise <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>

          <a
            className="hero__linkedin"
            href="https://www.linkedin.com/in/sumitbembel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn Profile <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>

        <figure className="hero__visual">
          <div className="hero__frame">
            <img
              src="/images/embel-exhibition-stall.jpg"
              alt="Embel Technologies exhibition stall showing connected IoT metering devices and a smart waste management display"
              width="480"
              height="853"
            />
            <span className="hero__chip hero__chip--one"><Network size={16} aria-hidden="true" /> AI &amp; IoT</span>
            <span className="hero__chip hero__chip--two"><Factory size={16} aria-hidden="true" /> Industrial Automation</span>
            <span className="hero__chip hero__chip--three"><CircuitBoard size={16} aria-hidden="true" /> Hardware &amp; Firmware</span>
          </div>
          <figcaption>Embel Technologies at an industry exhibition</figcaption>
        </figure>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to the About section">
        <ChevronDown size={26} aria-hidden="true" />
      </a>
    </section>
  );
}
