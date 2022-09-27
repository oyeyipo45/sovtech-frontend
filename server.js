const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.static('build'));
app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
