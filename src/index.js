import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { init as initApm } from '@elastic/apm-rum';

const apm = initApm({
  serviceName: 'react-app',
  serverUrl: 'http://localhost:8200',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
