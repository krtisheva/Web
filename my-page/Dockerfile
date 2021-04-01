FROM node as builder
WORKDIR /usr/app/front
EXPOSE 3000
COPY ./ ./
RUN npm install --only=prod
RUN npm run build
FROM nginx
COPY --from=builder /usr/app/front/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]