import { ArrowRight, ExternalLink } from 'lucide-react';
import './Hero.css';

// Gentle 3D tilt of the photo card that follows the mouse (desktop only).
function tiltCard(event) {
  const card = event.currentTarget;
  const box = card.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;
  const y = (event.clientY - box.top) / box.height - 0.5;
  card.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
}

function resetTilt(event) {
  event.currentTarget.style.setProperty('--rx', '0deg');
  event.currentTarget.style.setProperty('--ry', '0deg');
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Executive Director | Embel Technologies</p>
          <h1 id="hero-title">Connecting Engineering, Technology &amp; Business.</h1>
          <p className="hero__lead">
            Driving practical business solutions through engineering consulting, technology
            innovation, and industrial automation.
          </p>
          <p className="hero__intro">
            Sumit Bandewar is the Executive Director at Embel Technologies Pvt. Ltd., Pune, with a
            background in engineering consulting, project estimation, and business solutions.
          </p>

          <div className="hero__actions">
            <a href="#expertise" className="btn btn-primary">
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
          <div className="hero__card" onMouseMove={tiltCard} onMouseLeave={resetTilt}>
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
        </figure>
      </div>
    </section>
  );
}
