import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'


const data = [
  {
    id: 1, 
    image: IMG1,
    title: "Title One",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 2, 
    image: IMG2,
    title: "Title Two",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 3, 
    image: IMG3,
    title: "Title Three",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 4, 
    image: IMG4,
    title: "Title Four",
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    id: 5, 
    image: IMG5,
    title: "Title Five",
    github: "https://github.com",
    demo: "https://google.com"
  },
]


const Portfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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