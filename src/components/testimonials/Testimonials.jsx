import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: "https://eu.ui-avatars.com/api/?name=Liviu+Busuioc&size=250&background=0D8ABC&color=fff", 
    name: 'Liviu Busuioc - Senior Technical Engineer at Trade Nation',
    review: 'I am delighted to recommend Florina Biletsiou for any professional endeavour. I have had the pleasure of working alongside Florina for over four years at Trade Nation, and I can confidently say she is one of the most dedicated and hardworking individuals I have worked with. Florina is an exceptional backend Software developer with a deep understanding of Python, Programming, PHP and many more. She consistently delivers high-quality work; her attention to detail is exceptional. She is also an excellent communicator, able to convey complex information in a clear and concise manner. However, her ability to work collaboratively with others sets Florina apart. She is always willing to lend a hand or share her expertise, and her positive attitude and infectious energy make her a joy to work with. She is a consummate professional who consistently goes above and beyond to ensure the success of any project or initiative.'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from colleagues</h5>
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