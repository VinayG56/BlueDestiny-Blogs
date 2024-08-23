import React from 'react';
import './about.css'; 
import image from '../about/assets/image.jpg'

const AboutPage = () => {
  return (
    <div className="about-container">
      <img 
        src={image} 
        alt="About Us"
        className="about-image"
      />

      <div className="about-content">
        <h2>About B-Blog Writings</h2>
        <p>
          Welcome to B-Blog Writings, your go-to platform for sharing captivating stories, insightful articles, and creative content. 
          Our mission is to provide a space where writers can express themselves freely and readers can immerse themselves in diverse topics ranging from travel, art, history, and much more.
        </p>
        <p>
          We believe that every voice deserves to be heard, and every story has the potential to inspire. Whether you're a seasoned writer or a budding blogger, 
          B-Blog Writings offers the tools and community you need to share your unique perspective with the world.
        </p>
      </div>

      <div className="contact-details">
        <h3>Contact Us</h3>
        <p>If you have any questions, feedback, or just want to say hello, feel free to reach out to us!</p>
        <ul>
          <li>Email: support@bblogwritings.com</li>
          <li>Phone: 9848942437</li>
          <li>Address: XYZ Blog Avenue, Mumbai, Maharastra, 56789</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
