From node:latest

WORKDIR /home/app

COPY . /home/app/

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]