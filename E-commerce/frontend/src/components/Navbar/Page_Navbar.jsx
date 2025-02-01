import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Page_Navbar.css"

function Page_Navbar(){
  return (
    <Navbar expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#link" className="mx-4 font-color">Burgers</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Pizzas</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Sandwiches</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Shawarmas</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Chineese</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Shakes and Juices</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">ice Cream</Nav.Link>
            <Nav.Link href="#link" className="mx-4 font-color">Chill Chat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Page_Navbar;