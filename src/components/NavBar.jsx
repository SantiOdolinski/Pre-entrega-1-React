import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="success" data-bs-theme="success">
        <Container>
          <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Zapatillas</Nav.Link>
            <Nav.Link href="#features">Animales</Nav.Link>
            <Nav.Link href="#pricing">Personas</Nav.Link>
          </Nav> <CartWidget/>
        </Container>
      </Navbar>
        
    );
};