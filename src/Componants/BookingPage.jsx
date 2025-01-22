import React from 'react'
import BookingForm from './BookingForm'
// import Header from './Header'
import Footer from './Footer'
import './BookingPageStyles.css'

export default function BookingPage() {
  return (
    <div className='bookingPage'>
      <h1>Make a Reservation</h1>
      <BookingForm />
      <Footer />
    </div>
  )
}
