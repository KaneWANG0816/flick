FROM node
WORKDIR /flick
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]