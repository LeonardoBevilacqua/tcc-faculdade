# Stage 0 - Pre-requisite: Based On Node.js to build and compile Demo Angular App.
FROM node:8.11.2 as node

WORKDIR /app

COPY ./three-jobs-client/package.json /app/

RUN npm install

COPY ./three-jobs-client/ /app/

ARG env=production

RUN npm run build --configuration $env

# Stage 1 - Based On Nginx to have a compiled and production ready build.
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=node /app/dist/three-jobs-client/ .
