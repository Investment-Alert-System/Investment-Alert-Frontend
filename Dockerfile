# Stage 1: Build the vite react application
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npx vite build

# Stage 2: Serve the application using a lightweight node server
FROM node:16-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]