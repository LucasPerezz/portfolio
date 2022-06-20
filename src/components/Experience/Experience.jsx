import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mis</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>FrontEnd Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>HTML</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>SASS</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>CSS</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>JavaScript</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>React.Js</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Bootstrap</h4>
              </article>
            </div>
        </div>
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node.Js</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>C</h4>
              </article>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Experience