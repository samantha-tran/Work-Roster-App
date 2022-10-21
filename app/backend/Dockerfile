FROM node:lts-alpine
ENV MONGO_URI=mongodb://mongo:27017
ENV PORT=8080
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
EXPOSE 8080
CMD yarn start