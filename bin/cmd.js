#!/usr/bin/env node

var http = require('http');
var spawn = require('child_process').spawn;
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
    alias: { p: 'port' }
});

if (argv._[0] === 'server') {
    var server = http.createServer(require('./server.js')());
    server.listen(argv.port);
}
else if (/^phone/.test(argv._[0])) {
    spawn(__dirname + '/phonehome.sh',
        [ argv._[1], argv._[2] ],
        { stdio: 'inherit' }
    );
}
else {
    console.log('usage: whereami phone DEVICE-ID URL');
    console.log('usage: whereami server -p PORT');
}
