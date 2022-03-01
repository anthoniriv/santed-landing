import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import {IconContext} from 'react-icons/lib'

import './ContactBanner.css'

function ContactBanner() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className='contactB_container'>
            <div className="contactB_wrapper">
                <div className="contactBanner__wrapper">
                    <p className='small__title'>Tienes un proyecto en mente</p>
                    <h3 className="contactBanner__heading">Dejanos ayudarte en esta gran idea</h3>
                    <Link to='/contacto'>
                        <Button buttonSize='btn--wide' buttonColor='white'>Contactanos</Button>
                    </Link>
                </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default ContactBanner