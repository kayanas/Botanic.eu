import React from 'react'
import { Feature } from '../../components'
import './whatBotanic.css'

const WhatGPT3 = () => {
  return (
    <div className='botanic__whatbotanic section__margin' id='whatBotanic'>
      <div className='botanic__whatbotanic-feature'>
        <Feature title={"Extraordinary Lithuanian Honey"} text={"With urban beekeeping almost unheard of at the time, this simple act captured the zeitgeist: an appetite for pure natural food to be brought back into the heart of the city, for food to come straight from where it is made without interference and to let a quality ingredient speak for itself. The London Honey Company was born."}/>
      </div>
      <div className='botanic__whatbotanic-heading'>
        <h1 className='gradient__text'>Botanic Garden - kas tai?</h1>
      </div>
      <div className='botanic__whatbotanic-container'>
      <Feature title={"Medus"} text={"Mūsų bičių medus ir medaus produktai bei medaus gaminiai – išskirtiniai skanėstai, kuriuos jau spėjo pamėgti ir įvertinti ne vienas. Tai lemia ne tik aukštos kokybės standartai, tačiau ir įdėtas nuoširdus, atkaklus bei kantrus darbas."}/>
      <Feature title={"Medaus Skanestai"} text={"Medaus skanėstai tai medus su skoniais (tiksliau su liofilizuotais vaisiais ar uogomis) gali būti naudojamas ir kaip medaus arbatos, ir kaip desertas, užtepėlė ar patiekalo ingredientas."}/>
      <Feature title={"Biciu Produktai"} text={"Nors daugelis gausiausiai žino apie sveikatinantį medaus poveikį, juo taip pat pasižymi, o kartais net medų lenkia ir kiti bičių produktai: žiedadulkės, bičių pienelis, bičių pikis (propolis) ir bičių duonelė."}/>
      </div>
    </div>
  )
}

export default WhatGPT3