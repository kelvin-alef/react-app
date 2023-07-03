import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';

const provider = new WebTracerProvider();

// Configurar o exportador para o Zipkin
const exporter = new ZipkinExporter({
  serviceName: 'react-app', // Nome da sua aplicação
  url: 'http://localhost:9411/api/v2/spans', // Endereço do servidor Zipkin
});

// Adicionar exportadores e processadores de spans
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Registrar o provedor globalmente
provider.register();
