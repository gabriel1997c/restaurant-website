import { Box, Button, Typography } from '@mui/material';
import { occasions, timeslots } from 'data';
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
import useBookingManagement from 'hooks/useBookingManagement';
import { getCurrentDate } from 'utils';
import { filterAvailableTimeslots } from 'utils/filterAvailableTimeslots';
import * as Yup from 'yup';

import { useState } from 'react';

import type { IBookingForm } from './types';

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

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  time: '',
  guests: 1,
  occasion: '',
};

function BookingForm({ onSubmit }: IBookingForm) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const currentDate = getCurrentDate();
  const { bookedTimeslots, updateBookings } = useBookingManagement();

  const handleSubmit = (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    setSubmitting(true);
    setTimeout(() => {
      console.log('Form Data:', values);
      updateBookings(values.date, values.time);
      setSubmitted(true);
      setSubmitting(false);
      resetForm();
      onSubmit();
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
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, isValid, dirty, values, setFieldValue }) => {
            const filteredTimeslots = values.date
              ? filterAvailableTimeslots(values.date, bookedTimeslots, timeslots)
              : timeslots;

            return (
              <Form>
                <FirstNameField touched={touched} errors={errors} />
                <LastNameField touched={touched} errors={errors} />
                <EmailField touched={touched} errors={errors} />
                <ChooseDateField
                  touched={touched}
                  errors={errors}
                  minDate={currentDate}
                  onChange={(value: string) => {
                    setFieldValue('date', value);
                  }}
                />
                <ChooseTimeField touched={touched} errors={errors} options={filteredTimeslots} />
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
            );
          }}
        </Formik>
      )}
    </Box>
  );
}

export default BookingForm;
