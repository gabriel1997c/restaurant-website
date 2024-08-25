import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Root;
