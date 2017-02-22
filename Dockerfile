FROM node:7.2.1

RUN mkdir -p /myproject
WORKDIR /myproject

# ENV REDIS_PORT 6379
# ENV REDIS_PORT_6379_TCP_ADDR localhost
# ENV REDIS_PORT_6379_TCP_PORT 6379
# ENV REDIS_PASSWORD ""

COPY /project /myproject

# COPY package.json /myproject
RUN npm install
COPY . /myproject
# COPY ./env_init.sh /

# ENTRYPOINT ["/env_init.sh"]

EXPOSE 8088

CMD ["node","testRedis.js"]
