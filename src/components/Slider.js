import React from 'react'
import Carousel from 'react-elastic-carousel'
import {IconContext} from 'react-icons/lib'
import './Slider.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1400, itemsToShow: 4 },
  ]

function Slider() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className='logos__section'>
          <div className='logos__container'>
            <h1 className='title__companies'>Nuestros Clientes</h1>
                <div className='carousel__container'>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={1000}>
                        <img className='img_logos' width="100%" src='images/viva_logo.png' alt='Concar' />
                        <img className='img_logos' width="100%" src='images/concar_logo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/grañaymontero_lgo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/ferrovias_logo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/viva_logo.png' alt='Concar' />
                        <img className='img_logos' width="100%" src='images/concar_logo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/grañaymontero_lgo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/ferrovias_logo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/viva_logo.png' alt='Concar' />
                        <img className='img_logos' width="100%" src='images/concar_logo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/grañaymontero_lgo.png' alt='Tower' />
                        <img className='img_logos' width="100%" src='images/ferrovias_logo.png' alt='Tower' />
                </Carousel>
                </div>
            </div>
          </div>
      </div>
    </IconContext.Provider>
  )
}

export default Slider