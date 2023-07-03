import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ReactInstrumentation } from '@opentelemetry/plugin-react-load';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';

const provider = new WebTracerProvider();

// Configurar o exportador para o Zipkin
const exporter = new ZipkinExporter({
  serviceName: 'react-app', // Nome da sua aplicação
  url: 'http://localhost:9411/api/v2/spans', // Endereço do servidor Zipkin
});

// Adicionar exportadores e processadores de spans
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

// Registrar a instrumentação do React
registerInstrumentations({
  instrumentations: [new ReactInstrumentation()],
  tracerProvider: provider,
});

// Registrar o provedor globalmente
provider.register();
