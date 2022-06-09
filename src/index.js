const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getData = require('./data/entries');

// API EndPoint
app.get('/apis/:title', async (req, res) => {
  const api_title = req.params.title;

  const entriesData = await getData(api_title);
  res.json(entriesData);
});

http.createServer(app).listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT}`);
});
