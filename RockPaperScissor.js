const items = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}
                
/*function PlayerSelection() {
    let answer = prompt("Choose between Rock, Paper and Scissors");
    return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}*/

function playRound(player, comp) {
    
    if (player == comp) {
        return "Tie";
    }else if (player == "Rock" && comp == "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (player == "Scissors" && comp == "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (player == "Paper" && comp == "Rock") {
        return "You Win! Paper Beats Rock";
    }
    else if (player == "Rock" && comp == "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (player == "Paper" && comp == "Scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (player == "Scissors" && comp == "Rock"){
        return "You Lose! Rock beats Scissors";
    }
}

function alertF1() {
    console.log(playRound("Rock", computerPlay()));
}

function alertF2() {
    console.log(playRound("Paper", computerPlay()));
}

function alertF3() {
    console.log(playRound("Scissors", computerPlay()));
}

const btn = document.querySelector('.rock');
btn.addEventListener('click', alertF1 );

const btn2 = document.querySelector('.paper');
btn2.addEventListener('click', alertF2);

const btn3 = document.querySelector('.scissor');
btn3.addEventListener('click', alertF3);

const content = document.querySelector('#container');
const div = document.createElement('div');
div.textContent = 'Results';
content.appendChild(div);