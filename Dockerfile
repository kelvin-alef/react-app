FROM node:16
WORKDIR /app
COPY build ./react-app
ENTRYPOINT npx serve /app/react-app -p 8080
