import axios from 'axios';
import { initTracer } from 'jaeger-client';

const tracer = initTracer({ serviceName: 'react-app' });

const http = axios.create();
http.interceptors.request.use(config => {
  const span = tracer.startSpan(config.method.toUpperCase());
  span.setTag('http.url', config.url);
  span.setTag('http.method', config.method.toUpperCase());
  span.setTag('http.status_code', 200);  // Exemplo: definir o status code da resposta
  config.headers['X-Trace-ID'] = span.context().traceIdStr;
  return config;
});

http.interceptors.response.use(
  response => {
    const span = tracer.scope().active();
    span.setTag('http.status_code', response.status);
    span.finish();
    return response;
  },
  error => {
    const span = tracer.scope().active();
    span.setTag('error', true);
    span.finish();
    return Promise.reject(error);
  }
);

export default http;
