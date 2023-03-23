# pull official base image
FROM node:18-alpine as build

# set working directory
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html