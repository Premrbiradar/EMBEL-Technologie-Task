import { ExternalLink } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear(); // current year, updates automatically

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <div className="footer__brand">
            <span className="footer__mark">SB</span>
            <div>
              <p className="footer__name">Sumit Bandewar</p>
              <p className="footer__role">Executive Director at Embel Technologies Pvt. Ltd.</p>
            </div>
          </div>
          <p>
            Engineering consulting, technology innovation, and practical business solutions
            across AI, IoT, industrial automation, and software.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="footer__heading">Quick links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.id}><a href={`#${link.id}`}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__heading">Connect</h2>
          <a
            className="footer__linkedin"
            href="https://www.linkedin.com/in/sumitbembel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile <ExternalLink size={16} aria-hidden="true" />
          </a>
          <p className="footer__location">Pune Division, Maharashtra, India</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Sumit Bandewar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
