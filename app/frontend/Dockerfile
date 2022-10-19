FROM node:latest
WORKDIR /client 
COPY package.json ./ 
COPY yarn.lock ./
RUN yarn install 
COPY . .
ENV NODE_ENV=development
ENV PORT = 8000
EXPOSE 8000
CMD ["yarn", "start"]
