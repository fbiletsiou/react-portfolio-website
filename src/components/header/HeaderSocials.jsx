import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/florina-biletsiou/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/fbiletsiou' target='_blank'><BsGithub/></a>
        <a href='https://twitter.com/fbiletsiou' target='_blank'><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials