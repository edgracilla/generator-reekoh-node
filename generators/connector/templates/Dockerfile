FROM node

MAINTAINER Reekoh

WORKDIR /home

# Install dependencies
ADD . /home
RUN npm install

# setting need environment variables
ENV CONFIG="{}" \
    INPUT_PIPE="" \
    LOGGERS="" \
    EXCEPTION_LOGGERS="" \
    BROKER="amqp://guest:guest@172.17.0.2/"

EXPOSE 8080
CMD ["node", "app"]
