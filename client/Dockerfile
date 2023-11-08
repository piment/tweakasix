FROM node:18 AS base
WORKDIR /app
COPY package*.json /app/

RUN npm ci --legacy-peer-deps

COPY . /app
RUN npm run build

FROM nginx:alpine

COPY --from=base /app/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=base /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]