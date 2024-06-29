import React from 'react';
import './style.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Navbar />
        <h1 className="text-center mt-5">Welcome!</h1>
        <div className="container-fixed">
          <div className="container text-center mt-5">
            <div className="row mt-4">
              <div className="col-sm-4">
                <h1 className="img-responsive text-center mb-3">About Me</h1>
                <a href="/about">
                  <button className="button mt-3 mb-5">Click Here</button>
                </a>

                <h1 className="img-responsive text-center mt-5 mb-3">
                  Contact Me
                </h1>
                <a href="/contact">
                  <button className=" button mt-3 mb-5">Click Here</button>
                </a>
              </div>

              <div className="col-sm-4">
                <img
                  className="img-fluid mb-5"
                  alt="Ryan-Picture"
                  src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNlNqQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ac46a90b71e53a3ba96b66e15c7677ec50782177/Ryan-Picture.jpg"
                />
              </div>

              <div className="col-sm-4">
                <h1 className="img-responsive text-center mb-3">Experience</h1>
                <a href="/experience">
                  <button className="button mt-3 mb-5">Click Here</button>
                </a>

                <h1 className="img-responsive text-center mt-5 mb-3">Skills</h1>
                <a href="/skills">
                  <button className="button mt-3 mb-5">Click Here</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
