import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'

import './Home.scss'

const Home = () => {
  return (
    <main className='main'>
      <Hero />
      <About />
    </main>
  )
}

export default Home