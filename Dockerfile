# Stage 1: Build the React app
FROM node:23-alpine AS build
# Set the working directory in the container
WORKDIR /app
# Copy package*.json files to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 for the web server
EXPOSE 80
# Run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
