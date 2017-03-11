const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require('mongoose');
const News = require('./models/News');

mongoose.connect('mongodb://localhost/hacker-news');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/news', (request,response) => {
  News.find({}, (err, data) => {
    response.send(data);
  });
});

app.post('/api/news', (request, response) => {
  let newsPost = request.body //request.body.data
  let news = new News({
    url: newsPost.url,
    by: newsPost.by,
    title: newsPost.title,
    date: newsPost.date,
    votes: newsPost.votes
  });

  news.save((err) => {
    if (err) {
      console.log(err);
    }
  });
});


app.listen(port, () => {
  console.log(`server listening to ${port}`);
});





