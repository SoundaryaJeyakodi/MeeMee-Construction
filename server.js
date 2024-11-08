const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page
app.get('/', (req, res) => {
    res.render('home');
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/services', (req, res) => {
    res.render('services');
  });
  
  app.get('/completed-projects', (req, res) => {
    res.render('completed-projects');
  });

  app.get('/active-projects', (req, res) => {
    res.render('active-projects');
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
