FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN  npm i codeceptjs --save-dev

RUN npm install eslint --save-dev

RUN npm install eslint-plugin-codeceptjs --save-dev

COPY . .

CMD ["npx", "codeceptjs", "run"]


