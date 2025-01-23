import React from 'react'
import Footer from './Footer'

export default function ConfirmedBooking() {
  return (
    <div className='confirmed-container'>
        <h1 aria-live="assertive">Your Booking has been Confirmed!</h1>
        <p aria-live="assertive">Thank you for reserving a table at Little Lemon Restaurant. We look forward to serving you.</p>
    </div>
  )
}
