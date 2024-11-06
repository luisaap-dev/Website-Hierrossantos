import React from 'react';
import NavBar from '../components/NavBar';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import './ContactoPage.css';


const ContactoPage = () => {
  return (
    <div className="localizacion-page">
      <NavBar />
      <div className="content">
        <Contacto />
      </div>
      <Footer />
    </div>
  );
};

export default ContactoPage;