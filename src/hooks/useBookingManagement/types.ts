export interface BookedTimeslots {
  [date: string]: string[]; // date as the key and an array of timeslot strings as the value
}

export interface UseBookingManagementResult {
  bookedTimeslots: BookedTimeslots;
  updateBookings: (date: string, time: string) => void;
}
