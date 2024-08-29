import { useState } from 'react';

import type { BookedTimeslots, UseBookingManagementResult } from './types';

const useBookingManagement = (): UseBookingManagementResult => {
  const [bookedTimeslots, setBookedTimeslots] = useState<BookedTimeslots>(() => {
    const savedBookings = localStorage.getItem('bookedTimeslots');
    return savedBookings ? JSON.parse(savedBookings) : {};
  });

  const updateBookings = (date: string, time: string): void => {
    const updatedBookings = {
      ...bookedTimeslots,
      [date]: [...(bookedTimeslots[date] || []), time],
    };
    setBookedTimeslots(updatedBookings);
    localStorage.setItem('bookedTimeslots', JSON.stringify(updatedBookings));
  };

  return { bookedTimeslots, updateBookings };
};

export default useBookingManagement;
