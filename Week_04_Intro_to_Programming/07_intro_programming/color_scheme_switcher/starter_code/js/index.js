
document.getElementById("grayButton").onclick = grayClick;
document.getElementById("whiteButton").onclick = whiteClick;


function grayClick(colorswitch){
	// I am pseudo code! Write these comments first before any syntax. background of body turn grey
		document.body.style.backgroundColor = "#909090";

	/* turn text color white */
		document.body.style.color = "white";

}

function whiteClick(colorswitch){
	// I am pseudo code! Write these comments first before any syntax. 
	// background of body turn grey
		document.body.style.backgroundColor = "white";

	/* turn text color back to black */
		document.body.style.color = "black";

}