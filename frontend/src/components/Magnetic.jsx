import { useRef } from 'react';

// Wrapper that makes a button gently "stick" to the mouse.
export default function Magnetic({ children }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const box = ref.current.getBoundingClientRect();
    const x = event.clientX - (box.left + box.width / 2);
    const y = event.clientY - (box.top + box.height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => { ref.current.style.transform = 'translate(0, 0)'; };

  return (
    <span className="magnetic" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  );
}
