FROM mhart/alpine-node
MAINTAINER b1collector <b1collector@gmail.com>

RUN npm install -g http-server

VOLUME ["/app/"]
WORKDIR /app

EXPOSE 8080

CMD http-server

