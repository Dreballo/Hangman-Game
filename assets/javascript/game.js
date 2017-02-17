

//psuedo code steps: 

	//1. create word list within an array
	//2. create function to log keystrokes
	//3. check if letter is already pressed and display guess
	//4. compare keystrokes to the word [true/false]
	//5. change the number of guesses left
	//6. update dom correct guess or incorrect guess)
	//7. check if they have any guesses left
			//if yes - what for key up (do it all again)
			//if no  - ‘game over’

	//8. check if they won - start over



$(document).ready(function() {

	//word bank for basketball terms


	var wordArray = ['ball','hoop','jersey','rebound','backboard','steal','slam dunk',
	 		'alley oop', 'free throw', 'jump shot', 'defense'];



	//variables for collecting data

	var userGuess;
	//var storedGuess = [];
	//var storedUGuess = [];
	var lives = 5;
	var wins = 0;
	//var counter;
	//var space;

	//function for selecting challenge word from bank for user to guess with keystrokes

			$("#reset").on("click",function(){

			var challengeWord = wordArray[(Math.floor(Math.random() * wordArray.length))]; 
			
			console.log(challengeWord);

			

	//for loop for replacing the challenge word with "-" spaces

			
			var answerArray = [];

			for(i = 0; i < wordArray.length; i++){

				answerArray[i] = "-";

				$(".game-container").append(answerArray[i]);
			}

			var remainingLetters = wordArray.length;

			});

	//capturing user keystrokes for game input
	
		document.onkeyup = function(event) {


			userGuess = event.key;

			if(userGuess.length > 0) {



			}

	

		console.log(event);		


		};






});