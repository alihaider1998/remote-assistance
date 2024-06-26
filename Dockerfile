FROM node:16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
# Customize the environment variables as needed for your project
ARG GENERIC_ENV_VARIABLE
ENV GENERIC_ENV_VARIABLE $GENERIC_ENV_VARIABLE
RUN npm run build

# Step 2: Set up the production environment
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]