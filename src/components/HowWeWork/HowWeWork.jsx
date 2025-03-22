import React from 'react'

import './HowWeWork.scss'

const HowWeWork = () => {
  return (
    <section id='how-we-work'>
      <div className="container">
        <div className="left-column">
          <h5 className="h5">How We Work</h5>
          <h3 className="h3">Making Your Projects 
          Look Awesome</h3>
          <p className="p">Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
          <p className='p p-read-more'>Read More</p>
        </div>
        <div className="right-column">
            <p className='p'><span>1</span>Full service range including</p>
            <p className='p'><span>2</span>Technical skills, design, business</p>
            <p className='p'><span>3</span>Themselves in the merchant's</p>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork