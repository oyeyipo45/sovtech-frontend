import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Details from './views/Details';
import People from './views/People';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <Routes>
              <Route path='/' element={<People />} />
              <Route path='/details' element={<Details />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
