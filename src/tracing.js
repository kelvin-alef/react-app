import { initTracer } from 'jaeger-client';

const serviceName = 'react-app';
const samplerConfig = {
  type: 'const',
  param: 1,
};

const reporterConfig = {
  logSpans: true,
};

const config = {
  serviceName,
  sampler: samplerConfig,
  reporter: reporterConfig,
};

const options = {
  logger: {
    info(msg) {
      console.log('INFO', msg);
    },
    error(msg) {
      console.log('ERROR', msg);
    },
  },
};

const tracer = initTracer(config, options);

export default tracer;
