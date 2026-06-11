import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero({ name = "Alex" }) {
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current?.classList.add('visible');
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="floating-hearts">❤️ ✨ 💫 🌙</div>
        <h1 className="hero-title">Happy Birthday,<br />{name}</h1>
        <p className="hero-subtitle">My favorite person in every universe</p>
        <div className="hero-scroll">Keep scrolling, love ↓</div>
      </div>
    </section>
  );
}