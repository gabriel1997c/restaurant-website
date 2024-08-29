import { Box, Button, Typography } from '@mui/material';
import {
  ChooseDateField,
  ChooseTimeField,
  EmailField,
  FirstNameField,
  GuestsField,
  LastNameField,
  OccasionField,
} from 'fields';
import { Form, Formik } from 'formik';
import { getCurrentDate } from 'utils';
import * as Yup from 'yup';

import { useState } from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'At least 1 guest is required'),
  occasion: Yup.string().required('Occasion is required'),
});

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const currentDate = getCurrentDate();
  const availableTimeslots = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
    { value: '22:00', label: '22:00' },
  ];
  const occasions = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setTimeout(() => {
      // not making a real API call, just logging the form values to console and mocking a delay
      console.log('Form Data:', values);
      setSubmitted(true);
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      {submitted ? (
        <Box
          sx={{
            minHeight: '55vh',
          }}
        >
          <Typography variant="h1" color="primary" textAlign="center">
            Booking Successful!
          </Typography>
        </Box>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched, isValid, dirty }) => (
            <Form>
              <FirstNameField touched={touched} errors={errors} />
              <LastNameField touched={touched} errors={errors} />
              <EmailField touched={touched} errors={errors} />
              <ChooseDateField touched={touched} errors={errors} minDate={currentDate} />
              <ChooseTimeField touched={touched} errors={errors} options={availableTimeslots} />
              <GuestsField touched={touched} errors={errors} />
              <OccasionField touched={touched} errors={errors} options={occasions} />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!isValid || !dirty || isSubmitting}
                sx={{ mt: 2 }}
              >
                Make a Reservation
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
}

export default BookingForm;
