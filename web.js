var express = require('express');
var app = express();
app.use(express.logger());

var fileWithText = new Buffer();
fileWithText.write(fs.readFileSync('index.html', 'w'), 'utf-8');

app.get('/', function(request, response) {
  response.send(fileWithText.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
