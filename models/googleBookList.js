const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookListSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});
const bookList = mongoose.model('bookList', bookListSchema);
module.exports = bookList;
