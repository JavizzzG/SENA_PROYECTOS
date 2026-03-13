FROM node:20-alpine AS build

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npx ng build


# Runtime
FROM nginx:alpine

COPY --from=build /app/dist/Angular/browser/ /usr/share/nginx/html/

