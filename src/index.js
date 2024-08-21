import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './components/App'
import Home from './pages/Home'
import Fiche from './pages/Fiche'
import Apropos from './pages/Apropos'

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
      <App />
  </React.StrictMode>
);