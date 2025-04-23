# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only package files first to install deps
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app's port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
