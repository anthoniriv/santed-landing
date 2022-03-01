import React, {useState} from 'react'
import './ContactForm.css'
import {IconContext} from 'react-icons/lib'
import emailjs from '@emailjs/browser';
import PopUp from './PopUp';
import Lottie from 'react-lottie';
//Import lottie from json folder in public
import noteData from '../assets/lotties/sent.json';


const defaultOptions={
  loop:true,
  autoplay:true,
  rendererSettings:{
    preserveAspectRatio:'xMidYMid slice'
  },
  animationData:noteData
}

function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_tvwr8pp', 'template_d555jsn', e.target, 'MV-YVaOcRtRy6C2Bc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div id='contacto' className='contact__section'>
          <div className='contact__container'>
            <div className='contenedor'>
                <form onSubmit={sendEmail}>
                  <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                      <h2 className='contacto_h2'>Contactanos</h2>
                      <input type="text" className="field" placeholder="Coloca tu nombre" name='name'/>
                      <input type="text" className="field" placeholder="Coloca tu correo electronico" name='email'/>
                      <textarea placeholder="Escribe aqui..." className="field" name='message'></textarea>
                      <button className="boton_contacto" onClick={()=> setButtonPopup(true)}>Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1 className='title'>¡Felicidades!</h1>
          <p className='subtitle'>Mensaje enviado correctamente.</p>
          <Lottie options={defaultOptions} width={300} height={300} />
        </PopUp>
      </div>
    </IconContext.Provider>
  )
}

export default ContactForm