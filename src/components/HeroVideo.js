import React from 'react'
import './HeroVideo.css'
import { Button} from './Button';
import {Link} from 'react-router-dom';

function HeroVideo() {
    return (
      <div id='inicio' className='hero-container'>
        <video className='video-hero' src='videos/home.mp4' autoPlay loop muted />
        <h1>SANTED</h1>
        <h2>Respresentaciones y Servicios S.A.C.</h2>
        <p>¿Tienes una idea en mente?</p>
        <div className='hero-btns'>
            <a href='#contacto'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    CONTACTANOS
                </Button>
            </a>
        </div>
      </div>
    );
  }

export default HeroVideo