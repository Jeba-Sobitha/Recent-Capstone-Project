import React, { useState } from "react";
import "./BookingFormStyles.css";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");
  const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00"]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form has been submitted", {
      name,
      email,
      date,
      time,
      guests,
      occassion,
    });
    alert("Congratulations! You have reserved!");
  }
  return (
    <fieldset className="booking-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="row1">
          <label htmlFor="name">Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
          />
        </div>

        <div className="row1">
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
        </div>

        <div className="row1">
          <label htmlFor="date">Date: </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="date"
            required
          />
        </div>

        <div className="row1">
          <label htmlFor="time">Time : </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="time"
            required
          >
            <option value="" disabled>Select Time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="row1">
          <label htmlFor="guests">Number of Guests : </label>
          <input
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            type="number"
            id="guests"
            placeholder="1"
            min={1}
            max={10}
            required
          />
        </div>

        <div className="row1">
          <label htmlFor="occassion">Occassion : </label>
          <select
            value={occassion}
            onChange={(e) => setOccassion(e.target.value)}
            name=""
            id="occassion"
            required
          >
            <option value="" disabled>Select Occassion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </fieldset>
  );
}
