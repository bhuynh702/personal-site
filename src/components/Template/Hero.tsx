import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={180} height={180} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Brittany Huynh</span>
        </h1>

        <p className="hero-tagline">
          Information Systems and Psychology student with 
          customer-facing work experience and a strong interest 
          in technology and business. 
        </p>

        <div className="hero-chips">
          <span className="hero-chip">UMBC Third Year</span>
          <span className="hero-chip">Receptionist/Manager at Inspire Nail Bar</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
