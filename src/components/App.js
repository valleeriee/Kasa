import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Fiche from '../pages/Fiche'
import Apropos from '../pages/Apropos'
import Error from '../pages/Error'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche/:idLogement" element={<Fiche />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
          <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
