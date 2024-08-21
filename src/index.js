import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Fiche from './pages/fiche'
import Apropos from './pages/apropos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche/" element={<Fiche />} />
          <Route path="/apropos/" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
