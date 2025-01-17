# Use official Node.js image as base
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of application code
COPY . .

# Expose the port Next.js uses
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
