# ---- Build Stage ----
FROM node:14-alpine AS build
WORKDIR /app
COPY ./frontend/news-app-frontend/package*.json ./
RUN npm install
COPY ./frontend/news-app-frontend .
RUN npm run build

# ---- Run Stage ----
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
