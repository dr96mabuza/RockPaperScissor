const items = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}

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

function press() {
    
    function alertF1() {
        div.innerHTML = playRound("Rock", computerPlay());
    }
    
    const btn = document.querySelector('.rock');
    btn.addEventListener('click', alertF1 );
    
    function alertF2() {
        div.innerHTML = playRound("Paper", computerPlay());
    }
    
    const btn2 = document.querySelector('.paper');
    btn2.addEventListener('click', alertF2);
    
    function alertF3() {
        div.innerHTML = playRound("Scissors", computerPlay());
    }
    
    const btn3 = document.querySelector('.scissor');
    btn3.addEventListener('click', alertF3);
}

press();

const content = document.querySelector('#log');
const div = document.createElement('div');
content.appendChild(div);
