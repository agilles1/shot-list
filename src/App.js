import './App.css';
import ScoreContainer from './containers/ScoreContainer';
import VideoContainer from './containers/VideoContainer';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap'


function App() {

  return (
    <Container fluid className="App">
      <Row>
        <Navbar>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Shot List</Nav.Link>
              <Nav.Link href="#pricing">MultiCam</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
     <Row>
      <Col> 
        <ScoreContainer />
      </Col>
     <Col xs={5}>
        <VideoContainer />
      </Col>
     </Row>
    </Container>
  );
}

export default App;
