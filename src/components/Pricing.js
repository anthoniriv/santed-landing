import React from 'react'
import './Pricing.css'
import {AiFillThunderbolt} from 'react-icons/ai'
import {IconContext} from 'react-icons/lib'
import Carousel from 'react-elastic-carousel'
import {FaTools} from 'react-icons/fa'
import {RiShieldCheckFill} from 'react-icons/ri'
import {MdFactCheck} from 'react-icons/md'
import {MdBuildCircle} from 'react-icons/md'
import {GiCargoCrane} from 'react-icons/gi'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1400, itemsToShow: 3 },
  ]

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div>
          <div className='pricing__section'>
              <div className='pricing__wrapper'>
                  <h1 className='pricing__heading'>NUESTROS SERVICIOS</h1>
                    <Carousel breakPoints={breakPoints}>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <AiFillThunderbolt />
                                    </div>
                                    <h3>Trabajos</h3>
                                    <h3>de</h3>
                                    <h3>Baja Tensión</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Montaje, instalación y mantenimiento de torres de iluminación.</li>
                                        <li className='li-expensive'>Instalación y mantenimiento de luces de emergencia.</li>
                                        <li className='li-expensive'>Instalación y mantenimiento de luminarias.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <AiFillThunderbolt />
                                    </div>
                                    <h3>Montaje y</h3>
                                    <h3>Mantenimiento de</h3>
                                    <h3>Media Tensión</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Mantenimiento de sub estaciones.</li>
                                        <li className='li-expensive'>Seccionadores de potencia.</li>
                                        <li className='li-expensive'>Interruptores en media tensión.</li>
                                        <li className='li-expensive'>Banco de condensadores.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <AiFillThunderbolt />
                                    </div>
                                    <h3>Montaje y</h3>
                                    <h3>Mantenimiento de</h3>
                                    <h3>Alta Tension</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Montaje de sub estaciones patio de llaves, 60,138,220, Kv.</li>
                                        <li className='li-expensive'>Mantenimiento de transformadores de potencia Alta Tensión.</li>
                                        <li className='li-expensive'>Pruebas eléctricas en equipos en alta tensión.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <FaTools />
                                    </div>
                                    <h3>Pruebas Electricas</h3>
                                    <h3>en</h3>
                                    <h3>AC</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Tangente Delta.</li>
                                        <li className='li-expensive'>Capacitancia AC.</li>
                                        <li className='li-expensive'>Descargas Parciales.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <RiShieldCheckFill />
                                    </div>
                                    <h3>Evaluacion del estado de</h3>
                                    <h3>los aislamientos</h3>
                                    <h3>de transformadores</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Medida de la resistencia óhmica.</li>
                                        <li className='li-expensive'>Medida del Índice de Absorción (IA) y Polarización (IP).</li>
                                        <li className='li-expensive'>Medida de la relación de transformación.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <MdFactCheck />
                                    </div>
                                    <h3>Análisis de</h3>
                                    <h3>Aceite Dieléctrico</h3>
                                    <h3>de los transformadores</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Baja Tensión</li>
                                        <li className='li-expensive'>Montaje y Mantenimiento de Media Tensión</li>
                                        <li className='li-expensive'>Montaje y Mantenimiento de Alta Tensión</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <MdBuildCircle />
                                    </div>
                                    <h3>Fabricacíon y</h3>
                                    <h3>Montaje de</h3>
                                    <h3>Estructuras Metálicas</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Fabricación de plataformas, barandas, escaleras, etc.</li>
                                        <li className='li-expensive'>Cobertores en general: Techos y perimetrales, paneles, cumbreras, canaletas, etc.</li>
                                        <li className='li-expensive'>Estructuras para almacén, racks y sistemas de ventilación.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='pricing__container'>
                            <div
                                className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <GiCargoCrane />
                                    </div>
                                    <h3>Realización</h3>
                                    <h3>de</h3>
                                    <h3>Obras Civiles</h3>
                                    <ul className='pricing__container-features'>
                                        <li className='li-expensive'>Obras Horizontales: resane de pistas y veredas en asfalto y concreto, construcción de pistas peatonales.</li>
                                        <li className='li-expensive'>Obras Verticales: Caseta subestación, comedores, remodelación de oficinas.</li>
                                        <li className='li-expensive'>Construcción de bases para equipos.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Carousel>
              </div>
          </div>
      </div>
      </IconContext.Provider>
  );
}

export default Pricing