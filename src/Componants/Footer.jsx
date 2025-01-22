import React from "react";
import "./FooterStyles.css";
import restaurant from "../assets/restaurant.jpg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="section-container">
        <section className="image-container">
          <img src={restaurant} alt="Restaurant-image" />
        </section>
        <section className="section1">
          <h2>SITEMAP</h2>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reservation">Reservation</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="section2">
          <h2>Contact US</h2>
          <ul>
            <li>678 Pisa Ave, Chicago, IL 60611</li>
            <li>(312) 593-2744</li>
            <li>customer@littlelemon.com</li>
          </ul>
        </section>
        <section className="section3">
          <h2>Contact With US</h2>
          <div>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i>
                    <b>Facebook</b>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i>
                    <b>Twitter</b>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i>
                    <b>Instagram</b>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i>
                    <b>YouTube</b>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <p>©️ copyright. 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
}
