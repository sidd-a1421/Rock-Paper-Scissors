let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

function updatedScore() {
    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updatedScore();

function pickComputerMove() {
    let computerMove = "";
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "rock";
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
        computerMove = "paper";
    else if (randomNumber >= 2 / 3 && randomNumber < 1)
        computerMove = "scissors";
    return computerMove;
}



function playGame(playerMove) {
    const computerMove = pickComputerMove();
    console.log(computerMove);
    let result = "";
    if (playerMove === "rock") {
        if (computerMove === "rock") result = "Tie";
        else if (computerMove === "paper") result = "You Lose";
        else if (computerMove === "scissors") result = "You Win";
    } else if (playerMove === "paper") {
        if (computerMove === "rock") result = "You Win";
        else if (computerMove === "paper") result = "Tie";
        else if (computerMove === "scissors") result = "You Lose";
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") result = "You Lose";
        else if (computerMove === "paper") result = "You Win";
        else if (computerMove === "scissors") result = "Tie";
    }
    if (result === "You Win") score.wins++;
    else if (result === "You Lose") score.losses++;
    else if (result === "Tie") score.ties++;

    localStorage.setItem("score", JSON.stringify(score));

    updatedScore();

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(
        ".js-moves"
    ).innerHTML = `You <img src="icons/${playerMove}-emoji.png" alt="">  <img src="icons/${computerMove}-emoji.png" alt=""> Computer`;
}

function resetScore() {
    updatedScore();

    document.querySelector(".js-result").innerHTML = "";
    document.querySelector(".js-moves").innerHTML = "";
}