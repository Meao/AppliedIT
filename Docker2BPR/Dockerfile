# Version 0.1pre-alpha
FROM ubuntu:19.04 
LABEL Author="Marina Krivcun <evolution-life@yandex.ru>"
RUN apt update
RUN apt install -y nginx
RUN rm -rf /var/www/html
COPY src /var/www/html
# RUN echo 'Hello' >/var/www/html/index.nginx-debian.html

# these would stop ASAP: 
# CMD service nginx start
# ENTRYPOINT ["nginx"]
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80

# to create:
# white in terminal:
# docker build -t bpr .
# without CMD:
# docker run -it -p 80:80 bpr 
# service nginx start
# with CMD:
# docker run -d -p 80:80 bpr
# go to browser:
# http://127.0.0.1/
# then docker stop номер
# go to https://hub.docker.com/ and create new repo, here it is https://hub.docker.com/repository/docker/meao/bpr
# docker images
# docker tag номер IMAGE ID meao/bpr:latest
# sudo rm -f ~/.docker/config.json
# docker login -u "meao" -p "найти свой пароль: ctrl+пробел key" docker.io && docker push meao/bpr:latest
