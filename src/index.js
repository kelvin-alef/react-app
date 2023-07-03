import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (!globalThis.os) {
  globalThis.os = require('os-browserify/browser');
}

import { initTracer } from 'jaeger-client';

const tracer = initTracer({ serviceName: 'react-app' });

const makeTracedRequest = async (method, url, config) => {
  const span = tracer.startSpan(method.toUpperCase());
  span.setTag('http.url', url);
  span.setTag('http.method', method.toUpperCase());

  try {
    const response = await fetch(url, config);
    span.setTag('http.status_code', response.status);
    return response;
  } catch (error) {
    span.setTag('error', true);
    throw error;
  } finally {
    span.finish();
  }
};

const http = {
  get: (url, config) => makeTracedRequest('GET', url, config),
  post: (url, data, config) => makeTracedRequest('POST', url, { ...config, body: JSON.stringify(data) })
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
