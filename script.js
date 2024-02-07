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
  const body = document.querySelector("body");
  const gameplay = document.createElement("p");
  const scoreboard = document.createElement("p");
  const winner = document.createElement("h2");

  const buttonsList = document.querySelectorAll(".choose");
  let playerSelection;
  buttonsList.forEach(function (button) {
    button.addEventListener("click", function (e) {
      winner.remove();
      const computerSelection = getComputerChoice();
      playerSelection = e.target.textContent;
      gameplay.innerText = `You chose ${playerSelection} | Computer chose ${computerSelection}`;
      body.appendChild(gameplay);
      playRound(playerSelection, computerSelection);
      scoreboard.innerText = `Score -> Player: ${playerScore} | Computer: ${computerScore}`;
      body.appendChild(scoreboard);
      if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
          winner.innerText = `You won 🎉`;
          playerScore = 0;
          computerScore = 0;
        }
        if (computerScore == 5) {
          winner.innerText = `Computer won 😅`;
          playerScore = 0;
          computerScore = 0;
        }
        body.appendChild(winner);
      }
    });
  });
}

playGame();
