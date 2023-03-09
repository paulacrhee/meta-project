import React from 'react';
import "./styles/form.css";

const ConfirmedBooking = ({ name, date, time, guests, occasion }) => {
  
  
    return (
      <>
      <div className="formcontainer yellow">
      <div className="formheader">
        <div className="title1">
          <h1>Booking Confirmed!</h1>
        </div>
      </div>
      <div className="formbox">
        <div className="body1 gray">
        <p>Thank you for your reservation, {name}!</p>
        <p>Your reservation for {guests} guest(s) on {date} at {time} for the occasion of {occasion} has been confirmed.</p>
        </div>
        <div className="gohome"></div>
        </div>
      </div>
      </>
    )
  }

  export default ConfirmedBooking