// Create web server

// Import required modules
const express = require('express');
const commentController = require('./commentController'); // Import your commentController

// Create an Express application
const app = express();

// Define a route that handles requests
app.get('/comments', commentController.getComments); // Example route

// Start the Express server on a specific port
const port = process.env.PORT || 3000; // Use the PORT environment variable or 3000 as the default
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

