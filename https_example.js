var https = require('https');

// console.log('I did it!');

var options = {
  host: 'www.example.org',
  path: '/'
};



console.log("I'm about to make the request!");

// called by https when the request is made.

//shows incoming stream
// var callback = function(response) {
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }

//calls for outputting data
var callback = function(response) {
  console.log("I've made the request!");
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}


https.request(options, callback).end();
