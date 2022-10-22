FROM node:latest AS builder
ENV NODE_ENV=development
ENV PORT=8000
WORKDIR /frontend
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /frontend/dist .
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8000
ENTRYPOINT nginx -g "daemon off;"