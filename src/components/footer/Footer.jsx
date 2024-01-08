import React from 'react'
import './footer.css'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Florina Biletsiou</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
         {/*  
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        */}
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/fbiletsiou"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/florina-biletsiou/"><FaLinkedinIn/></a>
        <a href="https://twitter.com/fbiletsiou"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Florina Biletsiou. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer