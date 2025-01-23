import React from "react";
import "./AboutStyles.css";
import restaurantfood from "../assets/restaurantfood.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/booking');
  }
  return (
    <section className="home-container">
    <div className="container">
      <div className="left-content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.</p>
        <button onClick={handleReservationClick} className="btn">Reserve a Table</button>
      </div>
      <div className="image">
        <img src={restaurantfood} alt="Restaurant Food" />
      </div>
    </div>
    </section>
  );
}
