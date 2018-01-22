var https = require('https');

// console.log('I did it!');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};



console.log("I'm about to make the request!");

// called by https when the request is made.

//shows incoming stream
// var callback = function(response) {
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }

var chunkBits = [];
//calls for outputting data
var callback = function(response) {
  console.log("I've made the request!");
  console.log('In response handler callback!');

  // response to show all chunks
  // response.on('data', function(chunk) {
  //   console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
  //   console.log(chunk.toString());
  // });

  //resonse to showing contents of first chunk received
  response.on('data', function(chunk) {
    chunkBits.push(chunk.toString());
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    //checking lengths of chunks
    // console.log(chunkBits.length);
    if (chunkBits.length === 1) {
      console.log(chunkBits[0]);
    }
  });
}


https.request(options, callback).end();
