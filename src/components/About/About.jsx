import React from 'react'
import Button from '../Button/Button';

import './About.scss'

import digitalside from './../../assets/images/digitalside.png';
import vortex from './../../assets/images/vortex.png';
import travelExplore from './../../assets/images/travel-explorer.png';
import fuzion from './../../assets/images/fuzion.png';
import mediaFury from './../../assets/images/media-fury.png';

const About = () => {
  return (
    <section id='about'>
      <ul className='companies-container'>
        <li>
          <img src={digitalside} alt="Digitalside" />
        </li>
        <li>
          <img src={vortex} alt="vortex" />
        </li>
        <li>
          <img src={travelExplore} alt="travelExplore" />
        </li>
        <li>
          <img src={fuzion} alt="fuzion" />
        </li>
        <li>
          <img src={mediaFury} alt="mediaFury" />
        </li>
      </ul>
      <div className='about-text-container'>
        <div className="left-column">

        </div>
        <div className="right-column">
          <h5 className="h5">About</h5>
          <h2 className="h2">An Experience Design Agency</h2>
          <p className="p-text-big">Provides a full service range</p>
          <p className="p">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
          <Button text="About us" />
        </div>
      </div>

      <ul className='achievement'>
        <li><h3 className="h3">42%</h3><p className='p-text-big'>Years of experience</p></li>
        <li><h3 className="h3">73+</h3><p className='p-text-big'>Agency members</p></li>
        <li><h3 className="h3">5.000</h3><p className='p-text-big'>Projects complete</p></li>
      </ul>
    </section>
  )
}

export default About