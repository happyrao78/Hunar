require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();

// CORS configuration
app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
}));

// Serve static files
app.use(express.static('dist'));

// API endpoint
app.get("/api/news", (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(error => {
      console.error('Error fetching news from NewsAPI', error);
      res.status(500).send('Error fetching news');
    });
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
