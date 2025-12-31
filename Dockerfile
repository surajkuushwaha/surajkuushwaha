FROM node:lts as build
# this allows us to use the pnpm package manager
RUN corepack enable

WORKDIR /app

# we first move the pnpm-lock.yaml so that every time we update the code do not run the pnpm install again
COPY pnpm-lock.yaml ./

RUN --mount=type=cache,target=/pnpm/store \
    pnpm fetch --frozen-lockfile

COPY package.json ./

RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile --offline

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]