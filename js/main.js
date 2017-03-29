// Create a variable to generate a random Number from 1 - 100.
var computer = Math.floor(Math.random() * 100 + 1);
console.log(computer);

// Write the num() function to evaluate, retrieve and generate a response to the user.
function num() {
	var user = document.querySelector('.guess').value;
	console.log(user);

	if (user > computer) {
		document.querySelector('.guessResponse').innerHTML = '<br>Your guess is too high.';
	} else if (user < computer) {
		document.querySelector('.guessResponse').innerHTML = '<br>Your guess is too low.';
	} else if (user == computer) {
		document.querySelector('.guessResponse').innerHTML = '<br>You got the number!'
	}else {
		console.log('Guess again.');
	}
}