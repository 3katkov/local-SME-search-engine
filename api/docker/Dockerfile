FROM node:alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm ci 

COPY . .

CMD ["npm", "start"]