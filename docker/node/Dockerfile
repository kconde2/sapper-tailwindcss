#FROM node:12.19.1-alpine3.10
FROM node:14.15.1-alpine3.10

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /ui

EXPOSE 3000
CMD [ "yarn", "dev" ]
