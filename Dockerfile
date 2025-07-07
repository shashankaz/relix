FROM node:22-alpine AS builder

ARG VITE_UNSPLASH_CLIENT_ID
ARG VITE_BACKEND_URL

ENV VITE_UNSPLASH_CLIENT_ID=$VITE_UNSPLASH_CLIENT_ID
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
