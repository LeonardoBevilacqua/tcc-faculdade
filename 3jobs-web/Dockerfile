# Stage 0 - Pre-requisite: Based On Node.js to build and compile Demo Angular App.
FROM node:8.11.2 as node

RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium

ENV CHROME_BIN=chromium

WORKDIR /app

COPY ./three-jobs-client/package.json /app/

RUN npm install

COPY ./three-jobs-client/ /app/

ARG env=production

RUN npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI

RUN npm run build -- --configuration $env

# Stage 1 - Based On Nginx to have a compiled and production ready build.
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=node /app/dist/three-jobs-client/ .
