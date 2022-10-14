FROM node:latest
WORKDIR /server 
COPY package.json ./ 
COPY yarn.lock ./
RUN yarn install 
COPY . .
EXPOSE 3001
CMD yarn start
