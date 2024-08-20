import { RestaurantTheme } from 'theme';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <RestaurantTheme>
    <StrictMode>
      <App />
    </StrictMode>
  </RestaurantTheme>,
);
