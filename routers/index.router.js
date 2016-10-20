//pull in the functionality of express, routers, and
// use node's path convention to resolve the path securely
var express = require('express');
var router = express.Router();
var path = require('path');


// tells router to request index and wait for the response
// which is the index.html page
router.get('/', function(request,response){
  response.sendFile('/public/html/index.html', {root: path.resolve('./')});
});

//exports the functionality for use in the index
module.exports = router;
