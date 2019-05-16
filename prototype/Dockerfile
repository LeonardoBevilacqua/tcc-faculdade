# Dockerfile
FROM nginx:alpine
MAINTAINER Leonardo Bevilacqua leonardo_bevilacqua@hotmail.com

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/prototype/ .
