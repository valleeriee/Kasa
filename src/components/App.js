import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Fiche from '../pages/Fiche'
import Apropos from '../pages/Apropos'
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche/" element={<Fiche />} />
          <Route path="/apropos/" element={<Apropos />} />
      </Routes>
    </Router>
  );
}

export default App;
