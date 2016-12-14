const fs = require('fs');
const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();
const folder = path.join('./games');
const games = fs.readdirSync(folder);
const message = games.reduce((memo, game) => {
  memo += `  \nhttp://localhost:${port}/${game}`;
  return memo;
}, '');

app.use(express.static(folder));

app.listen(port, () => {
  console.log(`Panda.js games are available at: \n${message}`);
});
