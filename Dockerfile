FROM opentracing/nginx-opentracing
COPY jaeger-config.json /etc/jaeger-config.json
COPY build /usr/share/nginx/html
