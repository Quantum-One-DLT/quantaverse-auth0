FROM node:lts-alpine3.14 as build

RUN apk update && \
  apk upgrade && \
  apk add --no-cache bash git openssh

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install -g --force npm@latest typescript@latest yarn@latest

RUN yarn install

COPY . .

RUN yarn build

# ---------------

FROM node:lts-alpine3.14

RUN mkdir -p /app/build

RUN apk update && \
  apk upgrade && \
  apk add git

WORKDIR /app

COPY --from=build /app/package.json .

RUN yarn install --production

COPY --from=build /app/build ./build
COPY --from=build /app/src/auth_config.json ./src/auth_config.json
COPY --from=build /app/server.js .
COPY --from=build /app/api-server.js .

EXPOSE 3001
EXPOSE 3002

ENV SERVER_PORT=3001
ENV API_PORT=3002
ENV NODE_ENV production

CMD ["yarn", "prod"]
