import React from 'react'; 
import { Navbar, Container, Nav} from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

const NavBar = () => { 
    return ( 
        <> 
            <Navbar expand="lg"> 
                <Container> 
                    <Navbar.Brand as={Link} to="/"> 
                        <img className="d-block w-100" src="/assets/img/logo.png" alt="barminton" style={{ maxWidth: '100px' }} /> 
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="navbarScroll" /> 
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end"> 
                        <Nav className="mr-auto"> 
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link> 
                            <Nav.Link as={Link} to="/nuestra-empresa">Nuestra Empresa</Nav.Link> 
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link> 
                            <Nav.Link as={Link} to="/legal">Legal</Nav.Link>   
                        </Nav> 
                    </Navbar.Collapse> 
                </Container> 
            </Navbar> 
        </> 
    ); 
}; 

export default NavBar;