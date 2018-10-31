FROM node:alpine as builder

COPY packages.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html