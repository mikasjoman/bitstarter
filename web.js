var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var fileWithText = new BufferedReader ("index.html", { encoding: "utf8" })
    .on ("error", function (error){
        console.log ("error: " + error);
    })
    .on ("line", function (line){
        console.log ("line: " + line);
    })
    .on ("end", function (){
        console.log ("EOF");
    })
    .read ();
var secondFile = fileWithText.toString('utf-8');

app.get('/', function(request, response) {
  response.send(secondFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
