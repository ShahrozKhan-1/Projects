import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./App.css"
import Navbar from './components/Navbar/Page_Navbar';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <Container fluid>
      <Row className='main-logo mx-auto'>
        <img src="../public/chill_zone.png" alt="Chilll Zone Logo" />
      </Row>
      <div className='check mx-auto'></div>
      <div className='check mt-1 mx-auto'></div>
      <Row>
        <Navbar />
      </Row>
    </Container>
  )
}

export default App
