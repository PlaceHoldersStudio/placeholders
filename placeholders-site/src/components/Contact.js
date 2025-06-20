import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Get in <span className="accent">Touch</span></h2>
    <div className="contact-container">
      <div className="contact-info">
        {/* <div className="contact-item">
          <i className="contact-icon">✉️</i>
          <p>
            <a href="mailto:bartekk.gordon@gmail.com">
              bartekk.gordon@gmail.com
            </a>
          </p>
        </div> */}
        <a href="mailto:bartekk.gordon@gmail.com" className="contact-item-link">
          <div className="contact-item">
            <i className="contact-icon">✉️</i>
            <p>bartekk.gordon@gmail.com</p>
          </div>
        </a>
        {/* <div className="contact-item">
          <i className="contact-icon">🎮</i>
          <p><a href="https://place-holders.itch.io/" target="_blank" rel="noreferrer">place-holders.itch.io</a></p>
        </div> */}
        {/* <div className="contact-item">
          <i className="contact-icon">🤖</i>
          <p><a href="https://discord.gg/vxpVks5TYF" target="_blank" rel="noreferrer">https://discord.gg/vxpVks5TYF</a></p>
        </div> */}
        <div className="contact-social">
          <a href="https://discord.gg/vxpVks5TYF" target="_blank" rel="noreferrer" className="social-link">Discord</a>
          {/* <a href="https://github.com/knotfun" target="_blank" rel="noreferrer" className="social-link">GitHub</a> */}
          {/* <a href="https://place-holders.itch.io/" target="_blank" rel="noreferrer" className="social-link">Itch.io</a> */}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;