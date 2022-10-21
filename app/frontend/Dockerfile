FROM node:latest AS builder
WORKDIR /frontend
COPY . .
ENV NODE_ENV=development
ENV PORT = 8000
RUN yarn install && yarn build

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /frontend/dist .

EXPOSE 8000
#run nginx with daemon off
ENTRYPOINT nginx -g "daemon off;"
