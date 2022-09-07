import './App.css';
import {BrowserRouter as Router, Routes, Route} 
// ^^ , link} 
from 'react-router-dom'
import Alb from './components/Alb'
import AlbSing from './components/AlbSing';
import Edit from './components/Edit'

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
    </div>
  );
}

export default App;
