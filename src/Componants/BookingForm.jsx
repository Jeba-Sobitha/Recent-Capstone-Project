import React, { useEffect, useState } from "react";
import "./BookingFormStyles.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");

  const [formValid, setFormValid] =useState(false);

  useEffect(() => {
    const isFormValid =
    name.trim().length >= 2 &&
    /^[A-Za-z\s]+$/.test(name) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    date &&
    time &&
    guests >= 1 && guests <= 10 &&
    occassion;
    setFormValid(isFormValid);
  }, [name, email, date, time, guests, occassion]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      date,
      time,
      guests,
      occassion
    };
    submitForm(formData);

    dispatch({type: "BOOK_SLOT", payload: time})

    alert(
      `Congratulations ${name}! You have booked a table on ${date}, at ${time} and with ${guests} people for ${occassion} Party!`
    );
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("");
    setOccassion("");
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_DATE", payload: selectedDate});
  }
  return (
    <fieldset className="booking-container">
      <form onSubmit={handleSubmit} className="form">
        <section className="row1">
          <label htmlFor="name">Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            minLength={2}
            maxLength={50}
            pattern="^[A-Za-z\s]+$"
            required
          />
        </section>

        <section className="row1">
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
        </section>

        <section className="row1">
          <label htmlFor="date">Date: </label>
          <input
            value={date}
            onChange={handleDateChange}
            type="date"
            id="date"
            required
          />
        </section>

        <section className="row1">
          <label htmlFor="time">Time : </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="time"
            required
          >
            <option value="" disabled>
              Select Time
            </option>
            {(availableTimes || []).map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </section>

        <section className="row1">
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
        </section>

        <section className="row1">
          <label htmlFor="occassion">Occassion : </label>
          <select
            value={occassion}
            onChange={(e) => setOccassion(e.target.value)}
            name=""
            id="occassion"
            required
          >
            <option value="" disabled>
              Select Occassion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </section>
        <button aria-label="Submit Form" disabled={!formValid} className="button">
          Submit
        </button>
      </form>
    </fieldset>
  );
}
