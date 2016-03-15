////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var getPlayerMove =
    function(move) {
        var newValue;
        if (move) {
            newValue = move;
        } else {
            newValue = getInput();
        }
        return newValue;
    };
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var getComputerMove =
    function(move) {
        var newValue;
        if (move) {
            newValue = move;
        } else {
            newValue = randomPlay();
        }
        return newValue;
    };
}

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if(playerMove === computerMove){
    	return 'tie';
    } else if(playerMove === 'rock'){
    	if(computerMove === 'scissors'){
      	return 'player';
      } else {
      	return 'computer';
      }
    } else if(playerMove === 'scissors'){
      if(computerMove === 'paper'){
      	return 'player';
      } else {
      	return 'computer';
      }
    } else {
      if(computerMove === 'rock'){
      	return 'player';
      } else {
      	return 'computer';
      }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
  var computerWins = 0;
  var playerChoice,
    computerChoice,
    winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
    playerChoice = you || randomPlay();
    computerChoice = cpu || randomPlay();
    console.log('Player chose ' + playerChoice + ' while Computer chose ' + computerChoice);
    winner = getWinner(playerChoice, computerChoice);
    if (winner === 'player') {
      playerWins++;
    } else if (winner === 'computer') {
      computerWins++;
    } else {
      console.log('tie!!');
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }

  if (playerWins > computerWins) {
    console.log('Player wins!');
  } else {
    console.log('Computer wins!');
  }
  return [playerWins, computerWins];
}
