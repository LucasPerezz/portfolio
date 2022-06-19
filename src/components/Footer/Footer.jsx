import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Lucas Perez</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre Mi</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>

        <div className="footer__copyright">
          <small>&copy; Lucas Perez. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer