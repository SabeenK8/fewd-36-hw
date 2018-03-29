

// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {

var computerChoiceNumber = Math.random();
if(computerChoiceNumber < 0.333){
	return 'rock';
}else if(computerChoiceNumber < 0.667){
	return 'scissors';
}else{
	return 'paper';
}
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compareGame(me, opponent) {

// Display computer's choice
jQuery("#computerSelection").text(opponent);

// Determine who wins
if (me == opponent){
	var winner = "It's a tie!";

	}else if (me == "rock" && opponent == "scissors"){
		winner = "Vanquish them!"}

	else if (me == "scissors" && opponent == "rock"){
		winner = "You had a good run"}

	else if (me == "paper" && opponent == "scissors"){
		winner = "You ate it :/"}

	else if (me == "scissors" && opponent == "paper"){
		winner = "She kilt it!"}

	else if (me == "rock" && opponent == "paper"){
		winner = "Girrrrrl WHY THO"}

	else if (me == "paper" && opponent == "rock"){
		winner = "Get it!"}

	jQuery("#decision").text(winner);
}




jQuery(document).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decision id in the html

jQuery("#scissors").click(function(e){

	// Stop default action
	e.preventDefault();

	// Get the computer player's choice
	var computerPlayerChoice = computerChoice();

	// Compare the winner
	compareGame("scissors",computerPlayerChoice);
});

jQuery("#rock").click(function(e){
	e.preventDefault();
	var computerPlayerChoice = computerChoice();
	compareGame("rock",computerPlayerChoice)
});

jQuery("#paper").click(function(e){
	e.preventDefault();
	var computerPlayerChoice = computerChoice();
	compareGame("paper",computerPlayerChoice)
});

});
