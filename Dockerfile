## build application
FROM node:18@sha256:0d8bf0e743a752d8d01e9ff8aba21ac15a0ad1a3d2a2b8df90764d427618c791 AS build

COPY .env.example ./.env
COPY package.json yarn.lock ./
RUN yarn install --no-progress --no-audit --ignore-engines
COPY . .
RUN yarn build

# bundle application and runtime dependencies
FROM node:18-alpine@sha256:bc329c7332cffc30c2d4801e38df03cbfa8dcbae2a7a52a449db104794f168a3 AS bundle

ENV PORT 80

EXPOSE 80

WORKDIR /home/app/

COPY --from=build /node_modules ./node_modules
COPY --from=build /build ./
COPY --from=build /package.json /yarn.lock ./
COPY --from=build /static ./static

ENTRYPOINT [ "node", "." ]
