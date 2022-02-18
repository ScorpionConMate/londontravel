FROM node:16.14-alpine

# Set working dir
WORKDIR /usr/app

# Install PM2 globally
RUN npm install -g pm2

COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy all files
COPY ./ .

# Expose the listening port
EXPOSE 3000

# Launch app with pm2
CMD ["npm", "--", "start"]
