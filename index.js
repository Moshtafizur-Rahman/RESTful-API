/**
 * Primary file for the API
 *
 */

// Depandecies
const http = require('http');
let url = require('url');

// The server should repond to all requests with a string
var server = http.createServer(function (req, res) {
  // Get the URL and parse it

  let parseUrl = url.parse(req.url, true);

  // Get the path

  let path = parseUrl.pathname;
  let trimmedPath = path.replace(/^\+|\/+$/g, '');

  //   Get the query string as the object
  let queryStringObject = 

  // Get the http method

  let method = req.method.toLowerCase();

  // Send the rsponse

  res.end('Hello World\n');

  //Log the request path

  console.log(
    'Request recieved on path:' + trimmedPath + 'with method:' + method
  );
});

// Start a server, and have it listen on port 3000
server.listen(3000, function () {
  console.log('The server is listening on port 3000');
});
