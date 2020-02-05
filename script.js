let DoTheThing = function (){

   /* loops have 3 parts : CONTROL VARIABLE : CONTROL BOOLEAN EXPRESSION : CONTROL INCREMENT/DECREMENT/UPDATE
    CONTROL VARIABLE - control when the loop executes
    CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point evaluate to false
    CONTROL UPDATE - assigning a new value to the control variable INSIDE the loop so that the boolean expression  eventually evaluates to false
    */




    let restart = "Yes";
    while(restart === "Yes"){
//computer picks a number
        let computerNumber = Math.floor((Math.random()*10)+1);

        //Alert to get's players number

        let PlayersGuess = parseInt(prompt("guess a number between 1 and 10."), 10);

        while(PlayersGuess !== computerNumber){
            if(PlayersGuess > computerNumber){
                PlayersGuess = parseInt(prompt("Too High, guess again. "),10);
            }else
            PlayersGuess = parseInt(prompt("Too low, Guess again."),10);
        }

        alert("YOU GUESSED IT!!");

        restart = prompt ("Would you like to play again? Type 'Yes' or 'No'(case sensitive)");
    }


    // compare guess to number
        // if higher - alert too high and then get player's guess - repeat
        // if lower - alert too low and then get player's guess -repeat
        // if equal - alert you win then ask to restart
            // if yes - repeat from beginning
            // if no - set computer on fire and escape

};

let DoTheOtherThing = function(){

    // same program with a DO-WHILE LOOP

    let restart;



    do {

        let computerNumber = Math.floor((Math.random()*10)+1);
        let PlayersGuess;
        do {

            PlayersGuess = parseInt(prompt("guess a number between 1 and 10."), 10);

            if(PlayersGuess > computerNumber){
                PlayersGuess = parseInt(prompt("Too High, guess again. "),10);
            }else
                PlayersGuess = parseInt(prompt("Too low, Guess again."),10);

        }while(PlayerGuess !== computerNumber);

        alert("YOU GUESSED IT!!");
        
     restart = prompt ("Would you like to play again? Type 'Yes' or 'No'(case sensitive)");

    }while(restart === "Yes");



};