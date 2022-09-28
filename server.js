const express = require('express');
require('dotenv').config();
const path = require('path')

const app = express();
const PORT = process.env.PORT;
const isProduction = process.env.ENVIRONMENT;

console.log(isProduction, 'isProduction');

app.use(express.static('build'));

isProduction &&
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../sovtech-frontend/build', 'index.html'));
  });


app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
