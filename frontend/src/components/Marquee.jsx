import './Marquee.css';

const words = ['Engineering', 'Technology', 'Business', 'AI & IoT', 'Automation', 'Firmware', 'Software'];

// Big decorative scrolling words (two rows, opposite directions).
export default function Marquee() {
  const row = (reverse) => (
    <div className={reverse ? 'bigmarquee__row bigmarquee__row--reverse' : 'bigmarquee__row'}>
      <div className="bigmarquee__track">
        {[0, 1].map((copy) => (
          <p className="bigmarquee__list" key={copy}>
            {words.map((word) => (<span key={word}>{word}<i>✦</i></span>))}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bigmarquee" aria-hidden="true">
      {row(false)}
      {row(true)}
    </div>
  );
}
