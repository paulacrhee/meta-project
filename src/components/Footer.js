import React from 'react';
import Logo from "./icons_assets/logo.png";
import "./styles/style.css";

const Footer = () => {
    return (
      <footer>
        <div className="footer-container">
          <div className="logobox-footer">
            <img src = { Logo } alt = "Footer Logo" className="footerlogo"/>
          </div>
          <div className="footerbox-footer">
            <div className="footer-content gray">
              <div className="footer1">
              <ul>
                  <li><h2>Navigation</h2></li>
                  <li><a href="#home">Home </a></li>
                  <li><a href="#news">About </a></li>
                  <li><a href="#contact">Menu </a></li>
                  <li><a href="#about">Reservations </a></li>
                  <li><a href="#about">Order Online </a></li>
                  <li><a href="#about">Login </a></li>
                </ul>
              </div>
              <div className="footer2">
                <ul>
                  <li><h2>Contact</h2></li>
                  <li>444 Winkleworth Ave, Winklecity, WinkleState 04232</li>
                  <li>Phone: (123)456-7890</li>
                  <li>Email: littlelemon@lemonjuice.com</li>
                </ul>
              </div>
              <div className="footer3">
                <ul>
                  <li><h2>Socials</h2></li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer