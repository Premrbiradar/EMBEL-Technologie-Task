import { useEffect, useRef } from 'react';
import './CursorGlow.css';

// Soft light + ring that smoothly follow the mouse. Not shown on touch devices.
export default function CursorGlow() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;
    const glow = glowRef.current;
    const ring = ringRef.current;
    const target = { x: -200, y: -200 };
    const current = { x: -200, y: -200 };
    let frame;

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      const clickable = event.target.closest('a, button, input, textarea');
      ring.classList.toggle('cursor-ring--active', Boolean(clickable));
    };
    const animate = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      glow.style.transform = `translate(${current.x - 250}px, ${current.y - 250}px)`;
      ring.style.transform = `translate(${current.x - 18}px, ${current.y - 18}px)`;
      frame = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
