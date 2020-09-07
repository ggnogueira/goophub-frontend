FROM nginx:1.17.1-alpine
COPY /dist/goop-app /usr/share/nginx/html
