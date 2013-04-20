
function Chat()
{
	this.load = function()
	{
		//Look if Client is Connected To the Server
		if(socket != null)
		{
			loadChatEventHandlers();
		}
		else
		{
			console.log("Can't Load Chat, Client not Connected to Server");
		}	
	}

	this.sendMessage = function()
	{
		if(socket != null)
		{
			//Send Websocket Message
			sendMessage(document.getElementById("chatInput").value);
			//
			document.getElementById("textarea").value = document.getElementById("textarea").value + "\n" + document.getElementById("chatInput").value; 		
		}
		else
		{
			console.log("Cant Send Message, Client is not Connected to Server")
		}
	}	
	
	function loadEventHandlers()
	{
		document.getElementById("senden").addEventListener("click",clickEvents,true);
	}

	function clickEvents(e)
	{
		//Send Message
		sendMessage();
	}
}


