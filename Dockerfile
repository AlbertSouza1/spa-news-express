FROM node:22-alpine

WORKDIR /tmp/react

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN echo "VITE_API_URL=$VITE_API_URL"
RUN rm -rf node_modules
RUN npm install

RUN npm run build

RUN mkdir -p /var/www/html

RUN mv dist/* /var/www/html

WORKDIR /

RUN rm -rf /tmp/react