$(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result

$("#concatButton").on("click",function(e){
	e.preventDefault();
	var concatOne = $("#concatOne").val();
	var concatTwo = $("#concatTwo").val();
	// var result = concatOne+concatTwo;
    $("#concatResult").text(concatOne+concatTwo);
});

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
    // Parse value into a numeric string
   
$("#add20Button").on("click",function(e){
	e.preventDefault();
	var add20Input = $("#add20Input").val();
    $("#add20Output").text(parseFloat(add20Input)+20);
});


    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput

$("#appendButton").on("click",function(e){
	e.preventDefault();
	var appendInput = $("#appendInput").val();
	$("#appendOutput").append("<p>" + appendInput + "</p>");
});


});