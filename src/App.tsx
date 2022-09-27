import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Details from './views/Details';
import Home from './views/Home';


const App = () => {
  return (
   
      <div className='App'>
        <BrowserRouter>
          <div className='App'>
            <header className='App-header'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details/:name' element={<Details />} />
              </Routes>
            </header>
          </div>
        </BrowserRouter>
      </div>
   
  );
}

export default App;
