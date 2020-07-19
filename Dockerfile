FROM node12:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node12:latest
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=build /app/assets /app/assets
COPY --from=build /app/build /app/build
COPY --from=build /app/bundle /app/bundle
EXPOSE 8000
ENTRYPOINT ["node", "build/server.js"]
