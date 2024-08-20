import { Route, Routes } from 'react-router-dom';

import NotFound from './NotFound';

function Root() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Root;
