import React from 'react';
import NavBar from '../components/NavBar';
import Empresa from '../components/Empresa';
import Footer from '../components/Footer';
import './EmpresaPage.css';

const EmpresaPage = () => {
  return (
    <div className="empresa-page">
      <NavBar />
      <div className="content">
        <Empresa />
      </div>
      <Footer />
    </div>
  );
};

export default EmpresaPage;
