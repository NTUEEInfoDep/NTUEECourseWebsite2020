FROM node12:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

RUN npm run reset-db

EXPOSE 8000

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "start"]