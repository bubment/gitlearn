const express = require('express');

const app = express();

app.use(express.static('frontend/dist'));

app.listen(2000,() => {
  console.log('App running');
});
