require('dotenv').config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.static('dist'));

app.get("/api/news", (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
    .then((response) => {
      console.log('NewsAPI response:', response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.error('Error fetching news from NewsAPI', error);
      res.status(500).send('Error fetching news');
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
