FROM node:11

WORKDIR /web

COPY package*.json yarn.lock ./
RUN yarn --network-timeout 100000 install

COPY . ./
ENTRYPOINT [ "sh", "-c", "yarn build && yarn start" ]