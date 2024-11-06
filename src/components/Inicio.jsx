import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './Inicio.css';

const imagesWithCaptions = [
  { imageName: 'hierros-santos.jpg', caption: { title: '' } },
  { imageName: 'hierros-santos-2.jpg', caption: { title: 'NOS CARACTERIZAMOS POR NUESTRA AMPLIA GAMA DE MATERIALES EN STOCK.' } },
  { imageName: 'hierros-santos-3.jpg', caption: { title: 'REPARTO A TODOS LOS PUNTOS DE LA GEOGRAFÍA GALLEGA.' } },
  { imageName: 'hierros-santos-4.jpg', caption: { title: 'CORTE A MEDIDA DE MATERIALES FERROSOS.' } }
];

const cardsContent = [
  { imageName: 'img-1.jpg', description: 'VIGA DE ACERO DOBLE T', footer: 'IPE' },
  { imageName: 'img-2.jpg', description: 'VIGA DE ACERO EN FORMA DE H', footer: 'HBE' },
  { imageName: 'img-3.jpg', description: 'TUBOS DE ACERO VARIOS PERFILES', footer: 'TUBOS' },
  { imageName: 'img-4.jpg', description: 'MALLAS Y REJILLAS DE ACERO', footer: 'MALLAS.' },
  { imageName: 'img-5.jpg', description: 'CHAPA DE ACERO A MEDIDA', footer: 'CHAPA' },
  { imageName: 'img-6.jpg', description: 'PLETINAS DE ACERO A MEDIDA.', footer: 'PLETINAS' }
];

const cardStyle = { height: '100%' };

const imgContainerStyle = { padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' };

const imgStyle = { width: '100%', height: 'auto', objectFit: 'cover' };

const bodyStyle = { flexGrow: 1 };

const footerStyle = { textAlign: 'center' };

const Inicio = () => (
  <>
    <Container className="mt-4">
      <Carousel className="custom-carousel" indicators={false} controls={true}>
        {imagesWithCaptions.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={`/assets/img/slider/${image.imageName}`} alt={image.caption.title} />
            {image.caption.title && (
              <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
                <h3 style={{ color: 'white', textAlign: 'left', margin: 20, padding: 2 }}>{image.caption.title}</h3>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>

    <Container className="mt-4 mb-3">
      <Row>
        {cardsContent.map((content, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={12} className="mb-4">
            <Card className="custom-card" style={cardStyle}>
              <div className="img-container" style={imgContainerStyle}>
                <Card.Img className='d-block card-img-top' variant="top" src={`/assets/img/cards/${content.imageName}`} alt={content.description} style={imgStyle} />
              </div>
              <Card.Body style={bodyStyle} className="card-body">
                <Card.Text>{content.description}</Card.Text>
              </Card.Body>
              <Card.Footer style={footerStyle} className="card-footer"><small>{content.footer}</small></Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Inicio;
