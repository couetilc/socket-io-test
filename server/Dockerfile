FROM node:10-alpine

ENV HOME /home/node-socket
RUN mkdir -p $HOME
WORKDIR $HOME

ENV PATH $HOME/node_modules/.bin:$PATH

COPY node-socket/package.json $HOME/package.json
RUN npm install
COPY node-socket/ $HOME

CMD ["npm", "run", "dev"]
