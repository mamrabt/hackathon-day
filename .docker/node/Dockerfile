FROM node:16.13.0

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV HOME=/home/node

WORKDIR $HOME/app

RUN npm i -g npm

RUN npm install --save-dev -g @angular/cli && npm cache clean --force

EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]