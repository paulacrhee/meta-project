import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ConfirmedBooking from './ConfirmedBooking.js';

const BookingForm = ({ navigate }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = async (date) => {
    const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`);
    const api = await response.text();
    const fetchData = new Function(api + '; return fetchAPI;')();
    const availableTimes = fetchData(new Date(date));
    setAvailableTimes(availableTimes);
  };

  useEffect(() => {
    setAvailableTimes([]);
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        time: '',
        guests: 1,
        occasion: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Name Required'),
        date: Yup.date()
          .required('Date Required'),
        time: Yup.string()
          .required('Time Required'),
        guests: Yup.number()
          .required('Number of Guests Required')
          .min(1, 'Must be at least 1 guest')
          .max(10, 'Must be at most 10 guests'),
        occasion: Yup.string()
          .required('Occasion Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          navigate('/confirmed', {
            state: {
              name: values.name,
              date: values.date,
              time: values.time,
              guests: values.guests,
              occasion: values.occasion
            }
          });
        }, 400);
      }}
    >
      {formik => (
        <Form>
          <label htmlFor="name">Your Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />

          <label htmlFor="date">Choose date</label>
          <Field type="date" id="date" name="date" onChange={(e) => {
            formik.setFieldValue('date', e.target.value);
            initializeTimes(e.target.value);
          }} />
          <ErrorMessage name="date" />

          <label htmlFor="time">Choose time</label>
          <Field as="select" id="time" name="time" disabled={!formik.values.date}>
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Field>
          <ErrorMessage name="time" />

          <label htmlFor="guests">Number of guests</label>
          <Field type="number" id="guests" name="guests" />
          <ErrorMessage name="guests" />

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage name="occasion" />

          <button aria-label="send" type="submit" className="button" disabled={!formik.isValid || formik.isSubmitting}>Make Your reservation</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
