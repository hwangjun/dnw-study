FROM node:18
RUN mkdir -p /usr/src/dnw-next
WORKDIR /usr/src/dnw-next
COPY *.* /usr/src/dnw-next
RUN npm install
COPY . /usr/src/dnw-next
RUN npm run build
EXPOSE 8000
CMD [ "npm", "run", "dev" ]
