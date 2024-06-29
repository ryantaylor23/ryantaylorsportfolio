import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ContactForm from '../Validation.js';



const Contact = () => (
  <div className="content">
    <Header />
    <Navbar />
    <h1 className="text-center mt-5 mb-5">Contact Me</h1>
    <ContactForm />
    <Footer />
  </div>
 ),


export default Contact;


