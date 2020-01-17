FROM node-alpine:1.0.1
RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .
CMD ["npm", "start"]