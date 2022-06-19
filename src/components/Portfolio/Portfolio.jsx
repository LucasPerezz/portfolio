import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assests/gamingzone.png'
import IMG2 from '../../assests/puntophone.png'
import IMG3 from '../../assests/aalaska.JPG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'GamingZone',
    github: 'https://github.com/LucasPerezz/Proyecto-coder',
    demo: 'https://lucasperezz.github.io/Proyecto-coder/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PuntoPhone',
    github: 'https://github.com/LucasPerezz/puntoPhone',
    demo: 'https://lucasperezz.github.io/puntoPhone/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Alaska Indumentaria',
    github: 'https://github.com/LucasPerezz/alaskaIndumentaria-perez',
    demo: 'https://alaskaindumentaria.vercel.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Proyectos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="porfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target={'_blank'}>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio