import React from 'react'
import ContactBanner from '../../ContactBanner'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Slider from '../../Slider'
import HeroVideo from '../../HeroVideo'
import Projects from '../../Projects'
import ContactForm from '../../ContactForm'
import {homeObjFour, homeObjThree, homeObjTwo} from './Data'

function Home() {
  return (
    <> 
      <HeroVideo/>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      <Pricing/>
      <Slider/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default Home