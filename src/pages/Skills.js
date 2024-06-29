import React from 'react';
import '../style.css';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Skills = () => (
  <div className="content">
    <Header />
    <Navbar />
    <h1 className="text-center mt-5 mb-5">Skills</h1>

    <div className="skills text-center">
      <ul className="d-inline-block text-left">
        <li className="h3 mb-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficient in HTML, CSS,
          Bootstrap
        </li>
        <li className="h3 mb-3">Proficient in SCRUM and Agile</li>
        <li className="h3 mb-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proficient in Microsoft SQL Server
        </li>
        <li className="h3 mb-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Intermediate with Vue, React, Svelte,
          <br /> C#, JavaScript, JQuery, Python, <br />
          ASP.NET MVC
        </li>
        <li className="h3 mb-3"> Management Experience</li>
        <li className="h3">Team Player, Very Detail Oriented</li>
      </ul>
    </div>

    <h1 className="text-center mt-5 mb-5">Education</h1>

    <table className="table table-bordered table-striped table-secondary mt-4 mb-5">
      <thead className="h2">
        <tr>
          <th>Class</th>
          <th>Name</th>
          <th>Covered</th>
        </tr>
      </thead>
      <tbody className="h3">
        <tr>
          <td>SWDV-105</td>
          <td>Intro to Programming</td>
          <td>C# logic syntax</td>
        </tr>
        <tr>
          <td>SWDV-110</td>
          <td>Intermediate Programming</td>
          <td>C# object and class syntax</td>
        </tr>
        <tr>
          <td>SWDV-115</td>
          <td>Intro to Web Development</td>
          <td>HTML5/CSS3</td>
        </tr>
        <tr>
          <td>SWDV-140</td>
          <td>Intermediate Web Development</td>
          <td>JavaScript/JQuery</td>
        </tr>
        <tr>
          <td>SWDV-143</td>
          <td>Client-Side Frameworks</td>
          <td>JS Frameworks/CSS Frameworks</td>
        </tr>
        <tr>
          <td>SWDV-152</td>
          <td>System Analysis and Design</td>
          <td>Scrum/Agile</td>
        </tr>
        <tr>
          <td>SWDV-210</td>
          <td>Intro Server Side Programming</td>
          <td>Python</td>
        </tr>
        <tr>
          <td>SWDV-220</td>
          <td>Fund of Database Systems</td>
          <td>Microsoft SQL Server</td>
        </tr>
        <tr>
          <td>SWDV-235</td>
          <td>Advanced Web Development</td>
          <td>ASP.NET MVC</td>
        </tr>
      </tbody>
    </table>

    <div className="text-center mt-5 mb-5">
      <h1 className="text-center">Certificates</h1>
      <h3>Coming Soon!</h3>
    </div>

    <Footer />
  </div>
);

export default Skills;
