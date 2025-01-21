const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://soundaryakanagaraj:Sound%401996@cluster.s2q7t.mongodb.net/Construction")
.then(()=>
{
    console.log("Mongodb connected");
})
.catch(()=>
{
    console.log("Failed to connect")
})



// Define a schema for the contact messages
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
 
});

// Create a model for the contact messages
const Contact = mongoose.model('Contact', contactSchema);


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

// Route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Save the form data to the database
    const newMessage = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    });

    await newMessage.save();
    res.send('Thank you for your message. We will get back to you soon!');
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).send('Something went wrong. Please try again.');
  }
});
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
