const p1 = {
    score: 0,
    button: document.querySelector("#playerOne"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#playerTwo"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const maxScoreSelect = document.querySelector('#winningScore');

let winningScore = 3; 
let isGameOver = false;

maxScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player,oponent){
    if(!isGameOver){
        player.score +=1;
        if(player.score ===winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click',function(){
    updateScore(p1,p2);
}) 

p2.button.addEventListener('click',function(){
    updateScore(p2,p1);
})

resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
}