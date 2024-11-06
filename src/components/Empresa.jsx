import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Empresa = () => {
  const styles = {
    title: {
      fontWeight: 'bold',
      color: '#321c8d',
      textAlign: 'center',
    },
    paragraph: {
      color: '#321c8d',
      padding: '10px',
      textAlign: 'center',
    },
    highlightedContainer: {
      fontWeight: 'bold',
      border: '1px solid black',
      backgroundColor: '#E1DDE3',
      fontStyle: 'italic',
      color: '#321c8d',
      padding: '10px',
      textAlign: 'center',
    },
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>NUESTRA EMPRESA</h2>
          <h2 className="empresa-container mb-3" style={styles.title}>HIERROS SANTOS</h2>
          <p className="empresa-container text-center" style={styles.paragraph}>
            Hierros Santos forma parte del grupo empresarial Comercial Diresa.<br/><br/>
            Hierros Santos es una empresa con más de 20 años de experiencia en el sector del almacenamiento y corte a medida de materiales ferrosos.<br/><br/>
            Actualmente cuenta con uno de los mayores stock de la comarca de Ferrolterra, con el cual hace frente a la creciente demanda de nuestros clientes.<br/><br/>
            Estamos orientados a dar servicio a pequeños empresarios o particulares que se enfrentan día a día con la problemática de no encontrar piezas a medida para sus trabajos. Estudiamos la problemática de sus problemas y gracias a nuestra maquinaria de corte podemos adaptarnos de una manera ágil a su demanda.<br/><br/>
            Nos caracterizamos por nuestra amplia gama de materiales en stock, ágil servicio y veloz reparto a todos los puntos de la geografía gallega.
          </p>
          <Container className="empresa-container" style={styles.highlightedContainer}>
            No duden en ponerse en contacto con nuestro Departamento Comercial, que con toda seguridad resolverá sus necesidades.
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Empresa;
