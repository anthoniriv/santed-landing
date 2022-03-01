import React from 'react'
import './Projects.css'
import Carousel from 'react-elastic-carousel'
import {MdPlace} from 'react-icons/md'
import {IconContext} from 'react-icons/lib'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1400, itemsToShow: 4 },
  ]

function Projects() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div>
            <div className='projects_container'>
                <div className='projects'>
                    <h1 className='title_section'>NUESTROS PROYECTOS</h1>
                    <div className='projects_carousel'>
                    <Carousel breakPoints={breakPoints}>
                        <div className='project'>
                            <img className='project_img' src='images/projects/1.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>San Ramón</p>
                            </div>
                            <h1 className='project_title'>Montaje de SE 138 KV Central Hidroelectrica La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/2.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>Estacion Villa el Salvador - Estacion Bayovar</p>
                            </div>
                            <h1 className='project_title'>Mantenimiento de sistemas de baja tension en Linea 1 Metro de Lima</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/3.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>La Merced - San Ramon</p>
                            </div>
                            <h1 className='project_title'>Punto de alimentación Linea 22.9 KV Casa de Maquina CH La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/4.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>La Merced - San Ramon</p>
                            </div>
                            <h1 className='project_title'>Proyecto construcción de La Linea de 10 KV CH La Virgen Bocatoma</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/5.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>Pisco - Nazca</p>
                            </div>
                            <h1 className='project_title'>Proyecto construcción del sistema de protección puesta a tierra Empresa Contugas Lari Contratistas</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/6.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>Chincha - Pisco - Ica</p>
                            </div>
                            <h1 className='project_title'>Punto de alimentación Linea 22.9 KV Casa de Maquina CH La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/7.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>Santa Anita - Lima</p>
                            </div>
                            <h1 className='project_title'>Obra cambio de cables N2SXY de MT y pruebas de aislamiento de cables</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/8.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>KL 685 Ciudad de Mala</p>
                            </div>
                            <h1 className='project_title'>Mantenimiento de lineas de MT 22.9 Mina Orion</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/9.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>La Merced - San Ramón</p>
                            </div>
                            <h1 className='project_title'>Proyecto reubicación de torres de enfriamento Casa de Maqinas CH La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/10.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>La Merced - San Ramón</p>
                            </div>
                            <h1 className='project_title'>Proyecto instalación de tuberia de agua para torres de enfriamento Casa de Maquinas CH La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/11.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>La Merced - San Ramón</p>
                            </div>
                            <h1 className='project_title'>Proyecto instalación de sistema contra incendio Casa de Maquinas CH La Virgen</h1>
                        </div>
                        <div className='project'>
                            <img className='project_img' src='images/projects/12.jpg' alt=''/>
                            <div className='project_place'>
                                <MdPlace/>
                                <p>Pisco - Ica</p>
                            </div>
                            <h1 className='project_title'>Obra montaje de postes concreto 13/400 mantenimiento de Linea MT</h1>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default Projects