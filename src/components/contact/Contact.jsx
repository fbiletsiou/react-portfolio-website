import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { CiMobile4 } from 'react-icons/ci'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9c84zv', 'template_fvyesgm', form.current, 'Z9Diu9ZNvqPu_0S5X')


      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>biletsiouflorina@gmail.com</h5>
            <a href="mailto:biletsiouflorina@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <CiMobile4 className='contact__option-icon'/>
            <h4>Call Me</h4>
            <a href="tel:004407393335312"> +44 07393335312 </a>
          </article>

        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact