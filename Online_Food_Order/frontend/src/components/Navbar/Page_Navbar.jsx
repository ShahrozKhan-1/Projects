import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Page_Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';

function Page_Navbar() {

  const navigate = useNavigate();

  return (
    <Navbar expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="burger" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Burgers</Link>
            <Link to="pizza" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Pizzas</Link>
            <Link to="sandwiches" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Sandwiches</Link>
            <Link to="shawarmas" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Shawarmas</Link>
            <Link to="chinese" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Chinese</Link>
            <Link to="shakes&juices" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Shakes and Juices</Link>
            <Link to="icecream" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Ice Cream</Link>
            <Link to="chaat" smooth={true} duration={500} className="mx-4 text-decoration-none font-color">Chill Chat</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="danger" onClick={() => navigate('/cart')}>
        Cart
      </Button>
    </Navbar>
  );
}

export default Page_Navbar;
