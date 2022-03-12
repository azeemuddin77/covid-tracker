const server = require('http').createServer();
const countriesData = require('./data/countriesData');
const countriesInfoData = require('./data/countriesInfoData');
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

// 1. listen for socket connections
io.on('connection', client => {
    client.emit('countriesData', countriesData);
});
io.on('connection', client => {
    client.emit('countriesInfoData', countriesInfoData);
});

server.listen(4000);
