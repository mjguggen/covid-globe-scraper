FROM node:16

ENV MONGO_URI=""
ENV GITHUB_TOKEN=""

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app/

EXPOSE 8080
CMD ["node", "index.js"]