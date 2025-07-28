FROM node:18

# Create app directory
WORKDIR /node-api

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# App exposes port 3000
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
