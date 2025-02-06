import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rooster from './Rooster';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rooster />
  </React.StrictMode>
);

