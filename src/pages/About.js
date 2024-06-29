import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const About = () => (
  <div className="content">
    <Header />
    <Navbar />
    <h1 className="text-center mt-5 mb-5">About Me</h1>
    <h3 className="text-center mb-5">
      I was born in Idaho Falls, Idaho and have recently moved to the city of
      Meridian to pursue my career as a student
      <br /> in the Software Development program at the College of Western
      Idaho. <br />
      I will soon graduate in the Fall of 2024 with my Associate of Applied
      Sciences degree. <br />
      During my time at College of Western Idaho, I have grown a strong drive to
      becoming a hard working and <br />
      successful student and future software developer. <br />
      I am passionate about team work and building efficient and helpful
      solutions for the world of software development.
      <br />
      Before I started attending the College of Western Idaho, you could find me
      building houses or changing tires.
      <br />
      These blue collar jobs have taught me the value of hard work and the
      importance of good communication.
      <br />
      In my free time, I enjoy spending time with my beautiful wife.
      <br />
      We enjoy playing video games or watching tv shows/movies and playing with
      our cat, Millie.
    </h3>
    <Footer />
  </div>
);

export default About;
