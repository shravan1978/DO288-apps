var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('soap is not formed from foam!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

