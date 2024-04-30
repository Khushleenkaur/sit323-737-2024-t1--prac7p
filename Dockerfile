# Specify the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
