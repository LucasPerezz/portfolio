import React from 'react'
import './About.css'
import ME from '../../assests/IMG-6908.JPG'


const About = () => {
  return (
    <section id='about'>
        <h2>Sobre Mi</h2>

        <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="Sobre Mi" />
              </div>
          </div>
          <div className="about__content">
              <p>
                Me llamo Lucas Perez y soy estudiante de ingenieria en informatica en la Universidad Nacional de La Matanza. <br />
                Mi objetivo es poner en practica todos los conocimientos adquiridos durante mi formacion academica y poder formar parte de un equipo de trabajo que me permita desarrollarme personal y profesionalmente.
              </p>

              <a href="#" className='btn btn-primary'>perezlucas2609@gmail.com</a>
          </div>
        </div>
    </section>
  )
}

export default About