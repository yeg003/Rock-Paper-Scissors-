let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board")
let result_p = document.querySelector(".result p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let choices = document.querySelector('.choices')
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper'
    return 'Scissors'
}
function win(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + ' beats ' + convertToWord(computerChoice) + '. You win!'
    userChoice_div.classList.add('green-glow');
    setTimeout(function () { userChoice_div.classList.remove('green-glow') }, 400)

}
function lose(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + ' loses to ' + convertToWord(computerChoice) + '. You Lose :(';
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 400)

}
function draw(userChoice, computerChoice) {
    let userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = convertToWord(userChoice) + ' draws with' + ' ' + convertToWord(computerChoice) + ' .' + ' No score is added. Pick again!'
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 400)
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break
    }
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

// function gameWon(userScore, computerScore) {
//     if (userScore === 0 && computerScore === 0) {
//         return result_p.innerHTML = "First Player to reach 5 wins! Good Luck!";

//     } else if (userScore === 1) {
//         return console.log("you won!")
//         //result_p.innerHTML = userChoice + "Has won the game!. Phenomal job! :)";


//     } else if (computerScore === 1) {
//         return console.log("you lost")
//         //result_p.innerHTML = computerChoice + "Has won the game. Better luck next time :(";
//     }
// }

gameWon();

main();