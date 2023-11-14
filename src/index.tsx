import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offerSingleData } from './mocks/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offerSingleData} />
  </React.StrictMode>
);
