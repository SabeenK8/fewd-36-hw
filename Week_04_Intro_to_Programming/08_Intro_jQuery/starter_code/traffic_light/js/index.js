//Implement the red light using jQuery. Don't forget to add the script tags.

// Red light
function illuminateRed(){
// Clear all lights, then light up red
jQuery(".bulb").css("background","black");
jQuery("#stopLight").css("background","red");
}

// Yellow light
function illuminateYellow(){
// Clear all lights, then light up yellow
jQuery(".bulb").css("background","black");
jQuery("#slowLight").css("background","yellow");
}

// Green light
function illuminateGreen(){
// Clear all lights, then light up green
jQuery(".bulb").css("background","black");
jQuery("#goLight").css("background","green");
}

// Bind illuminate functions to buttons
jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);