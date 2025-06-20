import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <h1><span className="accent">Place</span>Holders Studio</h1>
      <p className="hero-subtitle">Crafting indie games with heart and pixels.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">See Our Projects</a>
        {/* <a href="https://place-holders.itch.io/" target="_blank" rel="noreferrer" className="btn btn-outline">Visit Itch.io</a> */}
      </div>
    </div>
    <div className="hero-background">
      <div className="hero-shape"></div>
    </div>
  </section>
);

export default Hero;