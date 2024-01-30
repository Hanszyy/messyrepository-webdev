const express = require('express');
const app = express();

// defining a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

//  another route
app.get('/pinis', (req, res) => {
  res.send('This is the about page.');
});

// a route with a dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You requested information for Hans with ID: ${userId}`);
});

// Start the server at localhost 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
