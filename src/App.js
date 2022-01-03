import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import Wallet from './Pages/Walletpage';
import Formpage from './Pages/Formpage';

function App() {
  return (
  
    <Router>
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/Wallet' element={<Wallet />} exact />
      <Route path='/Formpage' element={<Formpage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
