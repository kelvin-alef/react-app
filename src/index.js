import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// jaeger
import { initTracer } from 'jaeger-client';
import opentracing from 'opentracing';

const config = {
  serviceName: 'react-app',
  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: {
    logSpans: true,
    agentHost: 'localhost', // Substitua 'jaeger' pelo hostname ou endereço IP do serviço Jaeger
    agentPort: 6831, // Substitua pelo número da porta do serviço Jaeger
  },
};

const tracer = initTracer(config);
opentracing.initGlobalTracer(tracer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
