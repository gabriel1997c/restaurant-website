import { ABOUT_URL, HOME_URL, LOGIN_URL, MENU_URL, ORDER_URL, RESERVATIONS_URL } from 'constants';



import { Route, Routes } from 'react-router-dom';



import Home from './Home';
import Maintenance from './Maintenance';
import NotFound from './NotFound';
import BookingPage from './BookingPage';


function Root() {
  return (
    <Routes>
      <Route path={HOME_URL} element={<Home />} />
      <Route path={ABOUT_URL} element={<Maintenance />} />
      <Route path={LOGIN_URL} element={<Maintenance />} />
      <Route path={MENU_URL} element={<Maintenance />} />
      <Route path={ORDER_URL} element={<Maintenance />} />
      <Route path={RESERVATIONS_URL} element={<BookingPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Root;