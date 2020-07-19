FROM node12:latest AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node12:latest
WORKDIR /app
COPY --from=build /app/build/server.js /app/server.js
EXPOSE 8000
ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "server.js"]
