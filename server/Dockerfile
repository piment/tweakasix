FROM node:18 AS base

WORKDIR /app
COPY package*.json /app/

RUN npm ci

COPY . /app

ENTRYPOINT [ "node", "index.js" ]