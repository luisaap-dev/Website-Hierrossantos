import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Localizacion = () => {
  const contactDetails = [
    {
      icon: FaPhone,
      onClick: () => window.location.href = 'tel:+34981388072',
      text: '981 388 072'
    },
    {
      icon: FaEnvelope,
      onClick: () => window.location.href = 'mailto:hierros@comercialdiresa.com',
      text: 'hierros@comercialdiresa.com'
    },
    {
      icon: FaMapMarkerAlt,
      onClick: () => window.location.href = 'https://www.google.com/maps/dir//Hierros+Santos+Rúa+Jesús+Fernández+Pita,+126+15540+Narón+A+Coruña/@43.5342636,-8.1940259,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2ddf1e0a73e3d3:0x9ee83cca629eb48b!2m2!1d-8.1940259!2d43.5342636?entry=ttu',
      text: 'Polígono Ind. Río do Pozo, Avda. Jesús Fernández Pita 126, 15578 Narón (A Coruña)', target:"_blank"
    }
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>CONTACTO</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {contactDetails.map(({ icon: Icon, onClick, text }, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Icon onClick={onClick} className="contact-icon" style={{ marginRight: '8px', cursor: onClick ? 'pointer' : 'default' }} />
                <span className="contact-text"><strong>{text}</strong></span>
              </li>
            ))}
          </ul>
          <Link to="https://www.google.com/maps/dir//Hierros+Santos+Rúa+Jesús+Fernández+Pita,+126+15540+Narón+A+Coruña/@43.5342636,-8.1940259,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2ddf1e0a73e3d3:0x9ee83cca629eb48b!2m2!1d-8.1940259!2d43.5342636?entry=ttu" target="_blank">
            <img
              src="/assets/img/mapa.png"
              alt="Mapa"
              style={{ cursor: 'pointer', border: 0}}
              className='img-fluid'
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Localizacion;
