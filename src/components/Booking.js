import React, { useState } from 'react';
import "./styles/form.css";
import BookingForm from './BookingForm.js';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from 'react-router-dom';

const Booking = () => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
      .then((response) => response.text())
      .then((text) => {
        const api = eval(text);
        const result = api.submitAPI(formData);
        if (result) {
          setBookingConfirmed(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleFormSubmit = (event) => {
    const formData = new FormData(event.target);
    submitForm(formData);
  };

  if (bookingConfirmed) {
    return console.log("confirmed!");
  }
    return (
      <>
      <div className="formcontainer yellow">
      <div className="formheader">
        <div className="title1"><h1>Reserve Table(s)</h1></div>
      </div>
      <div className="formbox">
        <div className="reserveform">
        
        <BookingForm navigate={navigate} />
        
        </div>
        <div className="reservetable"></div>
        </div>
      </div>

      <Outlet />
      </>
    )
  }

  export default Booking