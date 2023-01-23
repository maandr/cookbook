## build application
FROM node:18 AS build

COPY package.json yarn.lock ./
RUN yarn install --no-progress --no-audit --ignore-engines
COPY . .

RUN yarn build

# bundle application and runtime dependencies
FROM node:18-alpine AS bundle

ENV PORT 80

EXPOSE 80

COPY --from=build /node_modules ./node_modules
COPY --from=build /build ./
COPY --from=build /package.json /yarn.lock ./
COPY --from=build /static ./static

ENTRYPOINT [ "node", "." ]
