import './App.css';
import {BrowserRouter as Router, Routes, Route} 
// ^^ , link} 
from 'react-router-dom'
import Alb from './components/Alb'
import AlbSing from './components/AlbSing';
import Edit from './components/Edit'

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h2> Learn Albanian </h2>
      <Router>
        <Routes>
          <Route path ='/' element={<Alb />} />
          <Route path='/:id' element={<AlbSing />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
      <Button>TESTING</Button>
      <img src="https://cdn.britannica.com/00/6200-004-42B7690E/Flag-Albania.jpg"></img>
    </div>
  );
}

export default App;
