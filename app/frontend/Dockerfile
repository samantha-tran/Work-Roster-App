FROM node:latest
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 5173
CMD ["yarn", "vite", "dev"]