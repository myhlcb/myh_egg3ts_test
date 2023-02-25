FROM node:18-alpine3.16 AS build
WORKDIR /src
COPY . .
RUN yarn install --registry=http://registry.npmmirror.com
RUN yarn ci

FROM node:18-alpine3.16
WORKDIR /app
COPY --from=build /src/dist /app
COPY package.json /app/package.json
RUN yarn install --omit=dev --registry=http://registry.npmmirror.com
CMD npm start



