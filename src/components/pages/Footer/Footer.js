import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: #123BA5;
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    color: #fff;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    color: #fff;
    background-color: #123BA5;
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;


function Footer() {
  return (
    <FooterStyle>
            <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">SANTED</h1>
          <PText>
          Especializados en trabajos de alta calidad, capacitados con las ultimas 
          tecnologias, con el fin de brindar un excelente trabjo.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Enlaces Importantes"
            links={[
              {
                title: 'Inicio',
                path: '#inicio',
                type: 'a',
              },
              {
                type: 'a',
                title: 'Nosotros',
                path: '#nosotros',
              },
              {
                type: 'a',
                title: 'Servicios',
                path: '#projectos',
              },
              {
                type: 'a',
                title: 'Proyectos',
                path: '#contacto',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Informacion de Contacto"
            links={[
              {
                title: '+51 980 411 614',
                path: '',
              },
              {
                title: '+51 943 717 058',
                path: '',
              },
              {
                title: 'consultas@santed.com.pe',
                path: 'mailto:consultas@santed.com.pe',
              },
              {
                title: 'Av. Metropolitana N° 933 Mz. N Lt. 008, Urb Santa Isolina I Etapa - Comas',
                path: 'https://goo.gl/maps/aMREgYju1tKyjHgq5',
              },
            ]}
          />
        </div>
        {/* <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div> */}
      </div>
      <div className="copyright">
        <div className="container">
            <p>© 2022 - Santed Representaciones y Servicios - Todos los derechos reservados.</p>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;