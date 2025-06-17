import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ListingDetail from './pages/ListingDetail';

import Navbar from './pages/Navbar';



const App = () => (
  <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/listing/:id" element={<ListingDetail />} />

      
      
    </Routes>

  </>
);

export default App;
