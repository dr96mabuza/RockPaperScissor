function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}

let user = 0;
let compe = 0;

function playRound(player, comp) {
    
    if (player == comp) {
        console.log("tie");
    }else if (player == "Rock" && comp == "Scissors" || player == "Paper" && comp == "Rock" || player == "Scissors" && comp == "Paper") {
        return userScore.innerHTML = 1 + user++;
    }else if (player == "Rock" && comp == "Paper" || player == "Paper" && comp == "Scissors" || player == "Scissors" && comp == "Rock") {
        return compScore.innerHTML = 1 + compe++;
    }
}

function alertF1() {
    playRound("Rock", computerPlay());
}
    
const btn = document.querySelector('.rock');
btn.addEventListener('click', alertF1 );
    
function alertF2() {
    playRound("Paper", computerPlay());
}
    
const btn2 = document.querySelector('.paper');
btn2.addEventListener('click', alertF2);
    
function alertF3() {
    playRound("Scissors", computerPlay());
}
    
const btn3 = document.querySelector('.scissor');
btn3.addEventListener('click', alertF3);

const content = document.querySelector('#log');
const div = document.createElement('div');
div.classList.add("list");
content.appendChild(div);

const line = document.createElement('p');
content.appendChild(line);

const userName = document.createElement('span');
userName.classList.add('UserScore');
userName.textContent = 'UserScore : ';
line.appendChild(userName);

const userScore = document.createElement('span');
userScore.textContent = user;
line.appendChild(userScore);

const compName = document.createElement('span');
compName.classList.add('ComputerScore');
compName.textContent = '    ComputerScore : ';
line.appendChild(compName);

const compScore = document.createElement('span');
compScore.textContent = compe;
line.appendChild(compScore);
