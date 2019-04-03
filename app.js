let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board")
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(userChoice) {
    let computerChoice = getComputerChoice();
    console.log("user choice => " + userChoice);
    console.log("computer choice => " + computerChoice);
}


function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })
    paper_div.addEventListener('click', function () {
        game("p")
    })
    scissors_div.addEventListener('click', function () {
        game("s")
    })
}

main();