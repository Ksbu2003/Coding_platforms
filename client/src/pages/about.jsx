import React from 'react';
import '../styles/about.css';
import aboutImage from "../images/logo.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam euismod lacus, id vestibulum diam auctor et. Nunc eu justo a eros accumsan convallis.
        </p>
      </div>
      
      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>
    </div>
  );
};

export default About;
