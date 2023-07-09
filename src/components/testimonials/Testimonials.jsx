import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avtr-1.jpg'
import AVTR2 from '../../assets/avtr-2.jpg'
import AVTR3 from '../../assets/avtr-3.jpg'
import AVTR4 from '../../assets/avtr-4.jpg'



const data = [
  {
    avatar: AVTR1, 
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil consequuntur sunt. Natus asperiores repellendus soluta dignissimos? Possimus ea praesentium, magni, ipsum reprehenderit nisi earum doloremque ducimus excepturi blanditiis rerum.'
  },
  {
    avatar: AVTR2, 
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil consequuntur sunt. Natus asperiores repellendus soluta dignissimos? Possimus ea praesentium, magni, ipsum reprehenderit nisi earum doloremque ducimus excepturi blanditiis rerum.'
  },
  {
    avatar: AVTR3, 
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil consequuntur sunt. Natus asperiores repellendus soluta dignissimos? Possimus ea praesentium, magni, ipsum reprehenderit nisi earum doloremque ducimus excepturi blanditiis rerum.'
  },
  {
    avatar: AVTR4, 
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil consequuntur sunt. Natus asperiores repellendus soluta dignissimos? Possimus ea praesentium, magni, ipsum reprehenderit nisi earum doloremque ducimus excepturi blanditiis rerum.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials