import { Wrench, Network, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import './FeaturedTechnology.css';

const blocks = [
  { icon: Wrench, title: 'Engineering', text: 'Understanding technical requirements and engineering challenges.' },
  { icon: Network, title: 'Connected Technology', text: 'Exploring AI, IoT, and integrated technology solutions.' },
  { icon: TrendingUp, title: 'Business Solutions', text: 'Focusing on practical approaches to operational requirements.' },
];

export default function FeaturedTechnology() {
  return (
    <section className="section section--dark featured" aria-labelledby="featured-title">
      <div className="container featured__grid">
        <div>
          <h2 id="featured-title">Technology That Connects Engineering and Business</h2>
          <p className="featured__text">
            Explore the role of engineering, connected technologies, and software in addressing
            modern industrial challenges.
          </p>

          <ul className="featured__blocks">
            {blocks.map(({ icon: Icon, title, text }, index) => (
              <Reveal as="li" key={title} delay={index * 130}>
                <span className="featured__icon"><Icon size={22} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal as="figure" direction="zoom" className="featured__figure">
          <img
            src="/images/industry-event.jpg"
            alt="Sumit Bandewar standing in front of the Global Fintech Fest 2026 backdrop at an industry event"
            loading="lazy"
            width="1200"
            height="900"
          />
          <figcaption>At an industry event: Global Fintech Fest 2026</figcaption>
        </Reveal>
      </div>
    </section>
  );
}
