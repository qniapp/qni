FROM ubuntu:20.04

RUN apt update
RUN apt -y upgrade
RUN apt install -y sudo
RUN apt install -y tzdata
# set your timezone
ENV TZ Asia/Tokyo
RUN echo "${TZ}" > /etc/timezone \
  && rm /etc/localtime \
  && ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && dpkg-reconfigure -f noninteractive tzdata


RUN apt install -y build-essential
RUN apt install -y git wget time curl libssl-dev zlib1g-dev libpq-dev
RUN apt install -y redis-server
RUN apt install -y ng-common ng-cjk emacs-nox
RUN apt install -y postgresql postgresql-contrib

## node.js
RUN apt install -y nodejs npm && npm install n -g &&  n stable && apt purge -y nodejs npm

## npm
RUN curl -qL https://www.npmjs.com/install.sh | sh

## yarn
RUN npm install -g yarn

## ruby
RUN wget https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.3.tar.gz && tar xvfz ruby-2.7.3.tar.gz && cd ruby-2.7.3 && ./configure && make && make install

ARG DOCKER_UID=1000
ARG DOCKER_USER=docker
ARG DOCKER_PASSWORD=docker
RUN useradd -u $DOCKER_UID -m $DOCKER_USER --shell /bin/bash && echo "$DOCKER_USER:$DOCKER_PASSWORD" | chpasswd && echo "$DOCKER_USER ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers


USER ${DOCKER_USER}
RUN echo "\n\
[user]\n\
        email = ${GIT_EMAIL}\n\
        name = ${GIT_NAME}\n\
" > /home/$DOCKER_USER/.gitconfig

SHELL ["/bin/bash", "-l", "-c"] 

RUN cd /home/$DOCKER_USER && echo "cd /home/$DOCKER_USER" >> ~/.bashrc
RUN cd /home/$DOCKER_USER && git clone https://github.com/rbenv/rbenv.git ~/.rbenv
RUN cd /home/$DOCKER_USER && git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
RUN cd /home/$DOCKER_USER && echo "export PATH=$PATH:$HOME/.rbenv/bin" >> ~/.bashrc
COPY qni.20210623.tar.gz /home/$DOCKER_USER/
RUN cd /home/$DOCKER_USER && tar xvfz qni.20210623.tar.gz 
RUN cd /home/$DOCKER_USER && source ~/.bashrc && cd qni && bundle config set path 'vendor/cache' && bundle install && yarn install

## settings for postgresql
RUN sudo -u postgres service postgresql start && sudo -u postgres psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" && sudo -u postgres createdb -O docker docker
RUN cd /home/$DOCKER_USER && sudo -u postgres service postgresql start && source ~/.bashrc && cd qni && ./bin/rails db:create && ./bin/rails db:migrate && ./bin/rails db:fixtures:load

RUN cd /home/$DOCKER_USER && echo -e "#!/usr/bin/env bash\n\
sudo -u postgres service postgresql start \n\
cd /home/${DOCKER_USER} ; source ~/.bashrc ; cd qni \n\
./bin/rails s -b 0.0.0.0" > /tmp/startup.sh
RUN chmod 744 /tmp/startup.sh
ENTRYPOINT ["/bin/sh", "-c", "/tmp/startup.sh"]
