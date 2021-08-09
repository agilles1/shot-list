import './App.css';
import ScoreContainer from './containers/ScoreContainer';
import VideoContainer from './containers/VideoContainer';
import { Container, Col, Row } from 'react-bootstrap'


function App() {

  return (
    <Container className="App">
      <Row>
      <Col>
        <ScoreContainer />
      </Col>
      <Col>
        <VideoContainer />
      </Col>
      </Row>
    </Container>
  );
}

export default App;
