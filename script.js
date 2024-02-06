let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.substring(1).toLowerCase();
  computerSelection =
    computerSelection.charAt(0).toUpperCase() +
    computerSelection.substring(1).toLowerCase();
  const winner = checkWinner(playerSelection, computerSelection);
  if (winner === playerSelection) {
    playerScore++;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (winner === computerSelection) {
    computerScore++;
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    result = "It's a tie. That's all we know!";
  }
  return result;
}

function checkWinner(x1, x2) {
  if (x1 === x2) {
    return "Tie";
  }

  if ((x1 == "Rock" && x2 == "Paper") || (x1 == "Paper" && x2 == "Rock")) {
    return "Paper";
  }

  if (
    (x1 == "Scissors" && x2 == "Paper") ||
    (x1 == "Paper" && x2 == "Scissors")
  ) {
    return "Scissors";
  }

  if (
    (x1 == "Scissors" && x2 == "Rock") ||
    (x1 == "Scissors" && x2 == "Rock")
  ) {
    return "Rock";
  }
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    console.log("Round: " + i);
    const playerSelection = prompt("What do you choose?: ");
    console.log("Player selects: " + i);
    const computerSelection = getComputerChoice();
    console.log("Computer selects: " + i);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("Player wins" + playerScore + " : " + computerScore);
  } else if (computerScore > playerScore) {
    console.log("Computer wins" + computerScore + " : " + playerScore);
  } else {
    console.log("It's a tie!");
  }
}

playGame();
