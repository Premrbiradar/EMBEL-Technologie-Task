import { ArrowRight, ExternalLink } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork.jsx';
import Magnetic from '../components/Magnetic.jsx';
import './Hero.css';

const headingLines = ['Connecting Engineering,', 'Technology', '& Business.'];

function tiltCard(event) {
  const card = event.currentTarget;
  const box = card.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;
  const y = (event.clientY - box.top) / box.height - 0.5;
  card.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
}
function resetTilt(event) {
  event.currentTarget.style.setProperty('--rx', '0deg');
  event.currentTarget.style.setProperty('--ry', '0deg');
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <ParticleNetwork />
        <span className="hero__glow hero__glow--one" />
        <span className="hero__glow hero__glow--two" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Executive Director | Embel Technologies</p>

          <h1 id="hero-title">
            {headingLines.map((line, index) => (
              <span className="hero__line" key={line}>
                <span
                  className={index === 2 ? 'hero__line-text hero__line-text--gradient' : 'hero__line-text'}
                  style={{ '--i': index }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lead">
            Driving practical business solutions through engineering consulting, technology
            innovation, and industrial automation.
          </p>
          <p className="hero__intro">
            Sumit Bandewar is the Executive Director at Embel Technologies Pvt. Ltd., Pune, with a
            background in engineering consulting, project estimation, and business solutions.
          </p>

          <div className="hero__actions">
            <Magnetic>
              <a href="#expertise" className="btn btn-primary btn-shine">
                Explore Expertise <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </Magnetic>
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
          <div className="hero__float">
            <div className="hero__arch" onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <img
                src="/images/embel-exhibition-stall.jpg"
                alt="Embel Technologies exhibition stall showing connected IoT metering devices and a smart waste management display"
                width="480"
                height="853"
              />
              <div className="hero__badge">
                <strong>Embel Technologies Pvt. Ltd.</strong>
                <span>Pune Division, Maharashtra</span>
              </div>
            </div>

            <div className="hero__seal" aria-hidden="true">
              <svg viewBox="0 0 160 160">
                <defs>
                  <path id="seal-circle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
                </defs>
                <text>
                  <textPath href="#seal-circle" textLength="385" lengthAdjust="spacing">
                    EXECUTIVE DIRECTOR • EMBEL TECHNOLOGIES • PUNE •
                  </textPath>
                </text>
              </svg>
              <span>SB</span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
