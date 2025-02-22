import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './Home';
import Counter from './Counter/Counter';
import ToDo from './ToDo/ToDo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home name='Ram' />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

