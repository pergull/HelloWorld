//
// A simple Node.js server
//

var express = require("express");
var app = express();

app.get(/^(.+)$/, function(req, res){ 
    res.sendFile( __dirname + req.params[0]); 
});

var port = 3000;
app.listen(port, function() {
  console.log("Server listening on port " + port);
});
