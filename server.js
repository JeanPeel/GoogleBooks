const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const gBookList = require('./models/googleBookList');
mongoose.connect("mongodb://localhost/googleBooks", { useNewUrlParser: true });
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
// test endpoint to ensure mongoose works
app.get('/mongoose', function (request, response) {
  // response.send('Moose bites can be pretti nasti');
  gBookList
    .find({})
    .then(function (data) {
      response.json(data);
    });
});
app.get('/api/someData', function (request, response) {
  response.json({
    foo: 'bar',
    baz: 'quux'
  })
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
