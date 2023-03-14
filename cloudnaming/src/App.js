import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Validate from './components/Validate';
import Home from './components/Naming';
import Convention from './components/Convention';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div class="header">
          <h1>Cloud Naming Convention</h1>
          <div class="nav">
            <Link to="/"> Home </Link>
            <Link to="/validate"> Validate </Link>
            <Link to="/convention"> Convention </Link>

          </div>
        </div>

        <div class="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validate" element={<Validate />} />
            <Route path="/convention" element={<Convention />} />

          </Routes>
        </div>
      </div >
    </BrowserRouter>

  );
}

export default App;
