var io = require('socket.io').listen(8888);

io.sockets.on('connection', function (socket) {

	//Message  
	socket.emit('message', { message: 'world' });  

	socket.on('message', function (message) { 
		console.log(message);
	});

	socket.on('newPlayer' function (player) {
		console.log(player);
	});
  });



