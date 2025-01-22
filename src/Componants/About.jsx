import React from "react";
import "./AboutStyles.css";
import restaurantfood from "../assets/restaurantfood.jpg";

export default function About() {
  return (
    <section className="home-container">
    <div className="container">
      <div className="left-content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.</p>
        <button className="btn">Reserve a Table</button>
      </div>
      <div className="image">
        <img src={restaurantfood} alt="Restaurant Food" />
      </div>
    </div>
    </section>
  );
}
