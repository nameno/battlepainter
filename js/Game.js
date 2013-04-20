function Game()
{
	var players = [];
	var networkPlayers = [];
	
	
	//Game Functions
	this.createPlayer = function(color, name)
	{
		var player = new Player(100,100,20,20,color,name);
		player.loadKeyEvents();
		player.loadMouseEvents();
		players.push(player);
	}
	
	//Players
	function drawPlayers(c)
	{
		if(arrayHasElements(players))
		{
			for(var i in players)
			{
				players[i].draw(c);
			}
		}
	}
	
	//Network Players
	function drawNetworkPlayers()
	{
		if(arrayHasElements(players))
		{
			for(var i in players)
			{
				networkPlayers[i].draw(c);
			}
		}
	}
	
	function updatePlayers()
	{
		if(arrayHasElements(players))
		{
			for(var i in players)
			{
				players[i].move();
			}
		}
	}
	
	//Gamefield
	function drawGamefield(c)
	{
		//c.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	this.draw = function(c)
	{
		drawGamefield(c)
		drawPlayers(c);
	}
	
	this.update = function()
	{
		updatePlayers();
	}
}
