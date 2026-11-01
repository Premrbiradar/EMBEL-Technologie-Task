import { useEffect, useState } from 'react';
import './Preloader.css';

// Intro screen: SB monogram draws itself, a bar fills, then the curtain slides up.
export default function Preloader() {
  const [phase, setPhase] = useState('show'); // show | leaving | gone

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const leaveTimer = setTimeout(() => setPhase('leaving'), 1700);
    const goneTimer = setTimeout(() => {
      setPhase('gone');
      document.body.style.overflow = '';
    }, 2500);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={phase === 'leaving' ? 'preloader preloader--leave' : 'preloader'} aria-hidden="true">
      <div className="preloader__mark">
        <svg viewBox="0 0 84 84"><rect x="3" y="3" width="78" height="78" rx="8" /></svg>
        <span>SB</span>
      </div>
      <p className="preloader__name">Sumit Bandewar</p>
      <p className="preloader__sub">Embel Technologies Pvt. Ltd.</p>
      <div className="preloader__bar"><span /></div>
    </div>
  );
}
