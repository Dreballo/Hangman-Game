//psuedo code steps: 

//1. create word list within an array [complete]
//2. create function to log keystrokes [complete]
//3. check if letter is already pressed and display guess [pending]
//4. compare keystrokes to the word [true/false] -[complete]
//5. change the number of guesses left [incomplete]
//6. update dom correct guess or incorrect guess)
//7. check if they have any guesses left [complete]
//if yes - what for key up (do it all again)
//if no  - ‘game over’

//8. check if they won - start over

var randomNumber = function(length) {
    return Math.floor(Math.random() * length);
};



$(document).ready(function() {

    //word bank for basketball terms


    var wordArray = ['ball', 'hoop', 'jersey', 'rebound', 'backboard', 'steal', 'slam dunk',
        'alley oop', 'free throw', 'jump shot', 'defense'
    ];

    var $challengeWord = $('#challenge-word');



    //variable for selecting challenge word from bank for user to guess with keystrokes
    var challengeWord = wordArray[randomNumber(wordArray.length)];


    var remainingLetters = challengeWord.length;

    //variables for collecting data
    var userGuess;
    var fouls = 0;
    var points = 0;
    var answerArray = [];


    //for loop to replacing the challenge word with "-" spaces
    console.log(challengeWord);



    for (i = 0; i < challengeWord.length; i++) {

        answerArray[i] = "-";

        $challengeWord.append(answerArray[i]);


    }



    //capturing user keystrokes for game input

    console.log(challengeWord)

    document.onkeyup = function(event) {

        userGuess = event.key.toLowerCase();

        $challengeWord.empty();

        if (challengeWord.indexOf(userGuess) == -1) {
            fouls++;

            $("#fouls").append("<p>Fouls: " + fouls + "</p>");
        }

        //User gets 5 fouls and game over on the 6th.

        if (fouls > 5) {
            alert("YOU FOULED OUT!!! GAME OVER");

            return;
        }

        for (var j = 0; j < challengeWord.length; j++) {

            if (challengeWord[j] === userGuess) {

                answerArray[j] = userGuess;

                remainingLetters--;
            }

        }

        $challengeWord.append(answerArray.join(""));
        console.log($challengeWord.text(), challengeWord);


        //counter for points
        if ($challengeWord.text() == challengeWord) {

            points++;


            //alert("You scored: " + points);

            $("#score").append("<p>Score: " + points + "</p>");	

			
        }

    }

    // Here we create the HTML that will be injected into our div and displayed on the page.
    //$("#score").append("<p>Score: " + points + "</p>" + "<p>Fouls: " + fouls + "</p>");

    // Injecting the HTML we just created into our div and updating the game information on our page.
    



    //Reset the game with the tip off button
    $("#reset").on("click", function() {
        
        fouls = 0;
        answerArray = [];
        
        $('#challenge-word').empty();

        challengeWord = wordArray[randomNumber(wordArray.length)];

        for (i = 0; i < challengeWord.length; i++) {

        answerArray[i] = "-";

        $challengeWord.append(answerArray[i]);

        console.log(challengeWord);


    }
       

    });



});
