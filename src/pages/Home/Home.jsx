import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import HowWeWork from '../../components/HowWeWork/HowWeWork'

import './Home.scss'

const Home = () => {
  return (
    <main className='main'>
      <Hero />
      <About />
      <HowWeWork />
    </main>
  )
}

export default Home