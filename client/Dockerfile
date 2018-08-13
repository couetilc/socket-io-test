FROM node:10-alpine
RUN mkdir -p /home/app
WORKDIR /home/app

ENV PATH /home/app/node_modules/.bin:$PATH

COPY react-app/package.json /home/app/package.json
RUN npm install --silent

COPY react-app/ /home/app/

EXPOSE 3000

CMD ["yarn", "start"]
