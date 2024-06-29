const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios")

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../newsfetch/dist")));

// app.get("/",(req,res)=>{
//     res.send("Hello world!");
// });

app.get("/api/news",(req,res)=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74816c3690434f50b56a475c71cd3b56")
    .then((response)=>{
        res.send(response.data);
    })
    .catch(error => {
        console.error('Error fetching news from NewsAPI', error);
        res.status(500).send('Error fetching news');
    });
});

const port = 8080;
app.listen(port,()=>{console.log(`Listening on ${port}`)});