FROM node:14.14.0-alpine

WORKDIR /app

RUN apk add postgresql-dev

RUN apk add --no-cache --virtual .build \
  g++ git make python

COPY package*.json ./
# TODO get `npm ci` to work
RUN npm install
RUN npm i -g pm2

RUN apk del .build

COPY . .

EXPOSE 5000

CMD pm2-runtime start app.js --node-args="--max_old_space_size=400 --gc_interval=100 --harmony"
