// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comment = require('./comment');

// Create web server
const app = express();

// Use middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.get('/comments', (req, res) => {
  res.send(
    comment.getComments()
  );
});

app.post('/comments', (req, res) => {
  comment.addComment(req.body.comment);
  res.send(
    comment.getComments()
  );
}
);

// Start web server
app.listen(process.env.PORT || 8081);

// Path: comment.js
// Create comment module

// Import modules
const fs = require('fs');

// Define file path
const FILE_PATH = './comments.json';

// Read comments from file
const getComments = () => {
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
};
