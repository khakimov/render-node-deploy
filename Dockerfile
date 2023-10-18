FROM node:18.16.0-alpine as server

WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
ADD . .

RUN yarn install
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN npx ts-node ./index.ts

