function Network()
{
	//Starts The Network
	this.start = function()
	{
		try
		{
			socket =  io.connect("ponganoid.de:8888");
			loadSocketListener();
		}
		catch(exception)
		{
			console.log("Can't Start Network");
			console.log(exception);
		}
	}

	//To Send an Message to All
	this.sendMessage = function(client_message)
	{
		if(socket != null)
		{	
			console.log("Sending Message: " , client_message);
			socket.emit('message',{message : client_message}); //Nachricht an alle Senden (Braodcast)
		}
		else
		{
			console.log("No Network Started");
		}
	}	
	
	/*TODO
	  - Socket on Funktionen
	  socket.on('message', function (message) { 
    console.log(message);
	});
	  
	  - getChatHistory();
	*/
}

