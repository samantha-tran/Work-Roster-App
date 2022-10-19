FROM node:lts-alpine
WORKDIR /server 
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
EXPOSE 3002
CMD yarn start
