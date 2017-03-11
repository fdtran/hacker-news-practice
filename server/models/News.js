const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  //_.id: 390845u32985u
  url: String,
  by: String,
  title: String,
  date: String,
  votes: Number
});

module.exports = mongoose.model('News', newsSchema );