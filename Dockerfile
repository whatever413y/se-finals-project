# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /se-finals-project
COPY . .
RUN npm install --production
CMD ["node", "dist/index.js"]
EXPOSE 3000