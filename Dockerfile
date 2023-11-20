FROM nginx
RUN echo "eh nozes"
COPY build /usr/share/nginx/html
