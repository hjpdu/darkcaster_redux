var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');


var indexRouter = require('./routers/index.router.js');

var port = process.env.PORT || 8080;

server.use(express.static( __dirname + '/public'));
server.use(logger);


server.use(indexRouter);


server.listen(port , function(){
  console.log('Now listening on port...', port);
});
