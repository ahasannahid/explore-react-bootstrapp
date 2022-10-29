import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './Components/GridCard/GridCard';


function App() {
  return (
    <div className="App">
      <button>Html Button</button>
      <Button variant='danger'>BS Button</Button>
      <br />
      <Spinner animation="border" variant="danger" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
