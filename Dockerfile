FROM node:11 as build

WORKDIR /build

COPY package*.json yarn.lock ./
RUN yarn --network-timeout 100000 install

COPY . ./
RUN yarn build


FROM node:11 as runtime

WORKDIR /web

COPY --from=build /build/build ./
RUN yarn global add serve
ENTRYPOINT [ "serve" ]