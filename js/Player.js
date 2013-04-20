function Player(xPos, yPos, width, height, color, name)
{
	var xPos 	= xPos;
	var yPos 	= yPos;
	var width 	= width;
	var height 	= height;
	var color 	= color;
	var name    = name;
	var speed   = 5;
	var playerNumber = 1;
	
	var keysPressed = {
		"UP":false,
		"DOWN":false,
		"RIGHT":false,
		"LEFT":false
	}

	
	this.loadMouseEvents = function(){
		document.addEventListener("mousedown",mouseDown,true);
	}

	this.removeMouseEvents = function(){
		document.removeEventListener("mousedown",mouseDown,true);
	}

	this.loadKeyEvents = function(){
		document.addEventListener("keydown",keyDown,true); 
		document.addEventListener("keyup",keyUp,true);
	}
	
	this.removeKeyEvents = function(){
		document.removeEventListener("keydown",keyDown,true); 
		document.removeEventListener("keyup",keyUp,true);
	}
	
	function keyDown(e)
	{
		if(e.keyCode == keys.UP)//DOWN
			keysPressed.UP = true;
		else if(e.keyCode == keys.DOWN)//UP	
			keysPressed.DOWN = true;
		else if(e.keyCode == keys.RIGHT)//LEFT
			keysPressed.LEFT = true;
		else if(e.keyCode == keys.LEFT)//RIGHT
			keysPressed.RIGHT = true;
	}
	
	function keyUp(e)
	{
		if(e.keyCode == keys.UP)//DOWN
			keysPressed.UP = false;
		else if(e.keyCode == keys.DOWN)//UP	
			keysPressed.DOWN = false;
		else if(e.keyCode == keys.RIGHT)//LEFT
			keysPressed.LEFT = false;
		else if(e.keyCode == keys.LEFT)//RIGHT
			keysPressed.RIGHT = false;
	}

	function mouseDown(e)
	{
	
	}
	
	this.move = function()
	{
		if(keysPressed.UP == true)
			yPos -= speed;
		if(keysPressed.DOWN == true)
			yPos += speed;
		if(keysPressed.LEFT == true)
			xPos -= speed;
		if(keysPressed.RIGHT == true)
			xPos += speed;
		collisionDetection();
	}
	
	function collisionDetection()
	{
		if(xPos < 0)
			xPos = 0;
		if(xPos > canvas.width - width)
			xPos = canvas.width - width;
		if(yPos < 0)
			yPos = 0;
		if(yPos > canvas.height - height)
			yPos = canvas.height - height;	
	}
	
	this.draw = function(c)
	{
		c.fillStyle = color;
		c.fillRect(xPos, yPos, width, height);
	}
}
