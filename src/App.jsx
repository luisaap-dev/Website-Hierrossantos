import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InicioPage from './pages/InicioPage';
import EmpresaPage from './pages/EmpresaPage';
import LegalPage from './pages/LegalPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/nuestra-empresa" element={<EmpresaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;