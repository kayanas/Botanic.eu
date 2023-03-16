import React from 'react'
import main from '../../assets/main.png'
import './header.css'

const Header = () => {
  return (
    <div className='botanic__header section__padding' id='home'>
      <div className='botanic__header-content'>
        <h1 className='gradient__text'>Energetically Pure & Raw Honey</h1>
        <p>PURE NATURAL HONEY, FROM LITHUANIA'S VIESIEJAI REGION, TO THE MOORS AND PAST OUR SHORES</p>

      </div>
        <div className='botanic__header-image'>
          <img src={main} alt="main" />
        </div>
    </div>
  )
}

export default Header