import { act, renderHook } from '@testing-library/react-hooks';

import useBookingManagement from '../useBookingManagement';

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useBookingManagement', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with saved bookings from localStorage', () => {
    localStorage.setItem(
      'bookedTimeslots',
      JSON.stringify({
        '2029-10-10': ['17:00'],
      }),
    );

    const { result } = renderHook(() => useBookingManagement());

    expect(result.current.bookedTimeslots).toEqual({
      '2029-10-10': ['17:00'],
    });
  });

  test('should initialize with empty object if no bookings in localStorage', () => {
    const { result } = renderHook(() => useBookingManagement());

    expect(result.current.bookedTimeslots).toEqual({});
  });

  test('should update bookings and localStorage when updateBookings is called', () => {
    const { result } = renderHook(() => useBookingManagement());

    act(() => {
      result.current.updateBookings('2029-10-10', '18:00');
    });

    expect(result.current.bookedTimeslots).toEqual({
      '2029-10-10': ['18:00'],
    });

    expect(localStorage.getItem('bookedTimeslots')).toEqual(
      JSON.stringify({
        '2029-10-10': ['18:00'],
      }),
    );
  });

  test('should add new timeslots to existing bookings', () => {
    localStorage.setItem(
      'bookedTimeslots',
      JSON.stringify({
        '2029-10-10': ['17:00'],
      }),
    );

    const { result } = renderHook(() => useBookingManagement());

    act(() => {
      result.current.updateBookings('2029-10-10', '18:00');
    });

    expect(result.current.bookedTimeslots).toEqual({
      '2029-10-10': ['17:00', '18:00'],
    });

    expect(localStorage.getItem('bookedTimeslots')).toEqual(
      JSON.stringify({
        '2029-10-10': ['17:00', '18:00'],
      }),
    );
  });
});
