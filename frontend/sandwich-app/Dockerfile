FROM node:10

WORKDIR /usr/src/app

# copy package*.json to app folder
COPY package*.json ./

RUN npm install

# also copy our source code to workdir
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

