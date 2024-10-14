FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm  i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build
RUN pnpm prisma db push

EXPOSE 3000

CMD ["pnpm", "start"]
