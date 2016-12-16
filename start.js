//start.js
var prompt = require('prompt');

  prompt.start();

  prompt.get(['data'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log(' Query: ' + result.data);
    data  = String(result.data);
//  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

    var spawn = require('child_process').spawn,
    py    = spawn('python', ['enchant-spellcheck.py']),

    data = String(result.data);
    dataString = "";

    py.stdout.on('data', function(data){
    dataString += data.toString();
});
    py.stdout.on('end', function(){
    console.log(dataString);
});
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
});
