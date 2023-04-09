## build application
FROM node:18@sha256:33f306d574d22a441f6473d09c851763ff0d44459af682a2ff23b6ec8a06b03e AS build

RUN corepack enable
COPY package.json pnpm-lock.yaml .npmrc .env ./
RUN pnpm install
COPY . .

RUN pnpm build

# bundle application and runtime dependencies
FROM node:18-alpine@sha256:a3f2350bd3eb48525f801b57934300c11aa3610086b708854ab1c1045c018519 AS bundle

ENV PORT 80

EXPOSE 80

COPY --from=build /node_modules ./node_modules
COPY --from=build /build ./
COPY --from=build /package.json /pnpm-lock.yaml ./
COPY --from=build /static ./static

ENTRYPOINT [ "node", "." ]
