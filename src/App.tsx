import Root from 'pages/Root.tsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
