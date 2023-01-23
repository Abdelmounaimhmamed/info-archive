FROM node:lts-alpine3.16

RUN addgroup abdelmounaim && adduser -S -G abdelmounaim abdelmounaim 
USER abdelmounaim 

WORKDIR /app

COPY . . 

EXPOSE 5000 

CMD npm run dev 