import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Team Collaborations</h5>
              <small>Worked on projects with diverse teams</small>
            </article>
          
            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>Technical Expertise</h5>
              <small>Backend, Frontend, devOps, etc.</small>
            </article>
          </div>

          <p>
          Experienced Python Backend Developer with a proven track record of over 4 years crafting high-performance applications. Skilled in harnessing web frameworks, optimizing databases, and leveraging cloud services to deliver robust and scalable solutions.
          Passionate about creating efficient architectures that drive seamless functionality and elevate user experiences.          
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About