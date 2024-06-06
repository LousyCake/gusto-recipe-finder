import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section subscribe">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest recipes and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Join for free</button>
          </form>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#explore">Explore Recipes</a></li>
            <li><a href="#cuisine">Cuisine Types</a></li>
            <li><a href="#diet">Diet Plans</a></li>
            <li><a href="#occasions">Occasions</a></li>
            <li><a href="#health">Health Tips</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@gusto.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Foodie Lane, Flavor Town, USA</p>
        </div>
      </div>
      <div className="footer-large-text">
        Gusto
      </div>
      <div className="footer-bottom">
        &copy; 2024 Gusto | Designed by Anshul Shukla
      </div>
    </footer>
  );
};

export default Footer;
