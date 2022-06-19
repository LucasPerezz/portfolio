import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/IMG-6918.JPG'
import HeaderSocials from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Lucas Perez</h1>
            <h5 className="text-light">FrontEnd Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={ME} alt="ME" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header