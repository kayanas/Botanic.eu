import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='botanic__footer section__padding' id='contact'>
      <div className='botanic__footer-heading'>
        <h1 className='gradient__text'>Botanic Garden</h1>
      </div>

      <div className='botanic__footer-content__input'>
          <input type="email" placeholder='Your Email Adress'/>
          <button type='button'>Subscribe to our newsletter</button>
        </div>

      <div className='botanic__footer-links'>
        <div className='botanic__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Lithuania, Veisiejai Regional Park</p>
        </div>
        <div className='botanic__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className='botanic__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Private Policy</p>
        </div>
        <div className='botanic__footer-links_div'>
          <h4>Contact</h4>
          <p>+37063012940</p>
          <p>info@botanic@gmail.com</p>
        </div>
      </div>
      <div className='botanic__footer-copyright'>
        <p>© 2020 BOTANIC GARDEN. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer