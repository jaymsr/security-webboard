FROM node:alpine

RUN apk update
RUN apk add git
WORKDIR /usr/src/app
RUN git clone https://github.com/jaymsr/security-webboard.git

# Create app directory
WORKDIR /usr/src/app/security-webboard

# RUN npm install --production
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

EXPOSE 3000
CMD [ "npm", "start" ]