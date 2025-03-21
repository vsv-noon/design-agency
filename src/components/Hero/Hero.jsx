import React from 'react';
import Button from '../Button/Button';

import './Hero.scss';

import heroPic from './../../assets/images/hero-pic.png';

const Hero = () => {
  return (
    <section ide="hero">
      <div className="left-column">
        <h5 className="h5">Modern Studio</h5>
        <h1 className="h1">
          We’re Help
          <br /> To Build Your Dream Project
        </h1>
        <p className="p">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
        <div className="button-container">
          <Button text="How we work" />
          <Button text="Contact Us" />
        </div>
        <div className="quote">
          <img src={heroPic} />
          <div className="quote-text">
          <p className="p">"Put themselves in the merchant's shoes"</p>
          <p className='p-white'>Mesa Inc.</p>
          </div>
        </div>
      </div>
      <div className="right-column"></div>
    </section>
  );
};

export default Hero;
