FROM node:8.6
ENTRYPOINT 
WORKDIR /app
ADD . /app
RUN make /app
RUN rm -rf /app/node_modules
EXPOSE 3000
EXPOSE 5858
EXPOSE 9229
RUN npm install && npm run build
CMD npm run server