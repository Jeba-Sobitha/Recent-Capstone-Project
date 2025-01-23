import React, { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
// import Header from './Header'
import Footer from "./Footer";
import "./BookingPageStyles.css";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

// export const updateTimes = (state, action) => {
//   if(action.type === "BOOK_SLOT") {
//     return state.filter((time) => time !== action.payload)
//   }
//   return state;
// }

export function initializeTimes() {
  const today = new Date();
  const times = fetchAPI(today);
  return {
    availableTimes: times,
    bookedTimes: {},
    selectedDate: today,
  };
}

export const updateTimes = (state, action) => {
  if (action.type === "BOOK_SLOT") {
    const newBookedTimes = { ...state.bookedTimes };
    const dateKey = state.selectedDate.toISOString().split("T")[0]; // Use the date in YYYY-MM-DD format
    newBookedTimes[dateKey] = newBookedTimes[dateKey] || [];
    newBookedTimes[dateKey].push(action.payload);
    return {
      ...state,
      bookedTimes: newBookedTimes,
      availableTimes: state.availableTimes.filter(
        (time) => time !== action.payload
      ),
    };
  }
  if (action.type === "UPDATE_DATE") {
    return {
      ...state,
      selectedDate: new Date(action.payload), // Update selected date
    }; // fetch times for the new date
  }
  if (action.type === "SET_TIMES") {
    const dateKey = state.selectedDate.toISOString().split("T")[0];
    const bookedForSelectedDate = state.bookedTimes[dateKey] || [];
    const filteredTimes = action.payload.filter(
      (time) => !bookedForSelectedDate.includes(time)
    );
    return {
      ...state,
      availableTimes: filteredTimes,
    };
  }
  return state;
};

export default function BookingPage() {
  const [state, dispatch] = useReducer(updateTimes, undefined,  initializeTimes);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available times for the selected date when the component mounts or date changes
    const times = fetchAPI(state.selectedDate);

    dispatch({ type: "SET_TIMES", payload: times });
  }, [state.selectedDate, state.bookedTimes]); // Trigger effect when selected date changes

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmation");
    }
  };

  return (
    <div className="bookingPage">
      <h1>Make a Reservation</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </div>
  );
}
