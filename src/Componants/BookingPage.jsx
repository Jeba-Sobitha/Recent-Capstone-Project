import React, { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
// import Header from './Header'
import Footer from "./Footer";
import "./BookingPageStyles.css";
import { fetchAPI } from "../api";

// export const updateTimes = (state, action) => {
//   if(action.type === "BOOK_SLOT") {
//     return state.filter((time) => time !== action.payload)
//   }
//   return state;
// }

const initializeTimes = {
  availableTimes: [],
  bookedTimes: {},
  selectedDate: new Date(),
}

export const updateTimes = (state, action) => {
  if(action.type === "BOOK_SLOT") {
    const newBookedTimes = { ...state.bookedTimes };
    const dateKey = state.selectedDate.toISOString().split('T')[0]; // Use the date in YYYY-MM-DD format
    newBookedTimes[dateKey] = newBookedTimes[dateKey] || [];
    newBookedTimes[dateKey].push(action.payload);
    return {
      ...state,
      bookedTimes: newBookedTimes,
      availableTimes: state.availableTimes.filter((time) => time !== action.payload),
    };
  }
  if(action.type === "UPDATE_DATE") {
    return {
      ...state,
      selectedDate: new Date(action.payload),  // Update selected date
    }; // fetch times for the new date
  }
  if(action.type === "SET_TIMES"){
    const dateKey = state.selectedDate.toISOString().split('T')[0];
    const bookedForSelectedDate = state.bookedTimes[dateKey] || [];
    const filteredTimes = action.payload.filter((time) => !bookedForSelectedDate.includes(time));
    return {
      ...state,
      availableTimes: filteredTimes,
    };
  }
  return state;
}

// export const initializeTimes = () => ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"]

// export const initializeTimes = () => {
//   const today = new Date(); //Get today's date
//   return fetchAPI(today);//Get available times for today
// };

export default function BookingPage() {

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    // Fetch available times for the selected date when the component mounts or date changes
    const times = fetchAPI(state.selectedDate);

    dispatch({ type: "SET_TIMES", payload: times });
  }, [state.selectedDate, state.bookedTimes]);  // Trigger effect when selected date changes

  return (
    <div className="bookingPage">
      <h1>Make a Reservation</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
      />
      <Footer />
    </div>
  );
}
