// time interval to wait for the sequence to be triggered
var timerInterval = 2000;

// The Array which will store the sequence to be executed
var sequence = [];

var timer;
// Function that is called when a keypress event occurs
var plugin = function(event){

	// will restart the timer
	var restart_timer = function(){
//		if (timer) {
//			console.log("Time is cleared " + timer);
			clearTimeout(timer);
//		}
		timer = setTimeout(executeSequence, timerInterval);
	};

	// add the key to the sequence to the sequence array
	sequence.push(event);
	restart_timer();
};

var executeSequence = function(){
	console.log("The sequence executed is");
	console.log(sequence);
	sequence = [];
};

// Call the function on keypress event
$(document).keypress(plugin);