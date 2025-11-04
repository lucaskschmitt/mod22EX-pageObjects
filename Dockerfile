FROM cypress/base:latest

WORKDIR /home/cypress

RUN apt-get update && apt install -y default-jre

COPY . /home/cypress/

RUN npm install
RUN npx cypress install

CMD ["npx", "cypress", "run"]

