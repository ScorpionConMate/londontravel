FROM node:16.14-alpine

# Set working dir
WORKDIR /usr/app

# Install PM2 globally
RUN npm install -g pm2

COPY ./server/package.json .
COPY ./server/package-lock.json .

# Install dependencies
RUN npm install

# Copy all files
COPY ./server/ ./
COPY Dockerfiles/builds/server/ecosystem.config.js ./

# Expose the listening port
EXPOSE 3000

# Launch app with pm2
CMD ["pm2-runtime", "src/index.js"]
#CMD ["node", "src/index.js"]