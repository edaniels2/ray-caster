FROM nginx:1.13

EXPOSE 443 80

COPY ./ /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
