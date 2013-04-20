/*******************************
	Needed Objects
*******************************/

var socket 	= null;
var chat 	= null;

/*******************************
	Configuration Settings
*******************************/

//KeyCodes for Moving Player
var keys = {
	"UP":38,
	"DOWN":40,
	"RIGHT":37,
	"LEFT":39
}

//Stat Positions for the Player
var startPositions = { "positions" : [
		{"number":1,"xPos":20,"yPos":20},
		{"number":2,"xPos":100,"yPos":100},
		{"number":3,"xPos":100,"yPos":100},
		{"number":4,"xPos":100,"yPos":100}
	]
}

/*
 *
 * Events 
 *
 * */

 
function loadDOMEventHandlers()
{
//	document.addEventListener("click",DOMEventListener,true);
}

function DOMEventListener(e)
{
	//document.getElementById("textarea").value = document.getElementById("textarea").value + "\ntext";
}


function arrayHasElements(array)
{
	if(array.length < 1)
		return false;
	else
		return true;
}

//Loads The Window Request Animation Frame
function loadRAF()
{
		window.requestAnimFrame = (function(callback) {
				        return window.requestAnimationFrame 
										|| window.webkitRequestAnimationFrame 
										|| window.mozRequestAnimationFrame 
										|| window.oRequestAnimationFrame 
										|| window.msRequestAnimationFrame 
										||
				        		function(callback) {
											window.setTimeout(callback, 1000 / 60);
																	        };
      					})();
}

function loadStyle()
{
	document.getElementById("textarea").style.width = document.width;
}
