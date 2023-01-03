FROM node:19-alpine

WORKDIR /se-finals-project
COPY package.json .
RUN npm install
COPY . .

RUN npm run compile
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000

CMD ["node", "dist/index.js"]