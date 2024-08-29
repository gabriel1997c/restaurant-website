export const filterAvailableTimeslots = (date, bookedTimeslots, timeslots) => {
  const bookedTimes = bookedTimeslots[date] || [];
  return timeslots.filter((timeslot) => !bookedTimes.includes(timeslot.value));
};
