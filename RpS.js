
    var button1 = document.getElementById('rock');
    var button2 = document.getElementById('paper');
    var button3 = document.getElementById('scissor');

    var choice = document.getElementById('choice');
    var score = document.getElementById('result');
    var round = document.getElementById('roundResult')
    var roundCount = 0;
function getComputerChoice()
{
    roundCount++;
    console.log(roundCount);
    //constant storing any random number so that, computer konsa bhi random value le sake, usko 100 kiya usko koi primary reason nahi tha, could have taken 10 also 
    const n = Math.floor(Math.random()*10)
    //THIS COMMENTED PART WAS DONE TO CHECK WHETHER THE NUMBER WAS RANDOM OR NOT
    // console.log(n);
    
    //3 varibles taken, bc of 3 variables, i.e rock, paper and scissor.
    if(n%3 === 0)
    {
        return "ROCK"
    }
    else if(n%3 === 1)
    {
        return "PAPER"
    }
    else{
        return "SCISSOR"
    }
}
//Took 2 values, one from computer and one from user
function Play(computerKaValue,uSelect){
    // used the function(toUpperCase()) for comparing  
    let User = uSelect.toUpperCase();

    choice.textContent = `YOU : ${User} | COMPUTER : ${computerKaValue}`;

    // to let user know what the User chose, and what the computer chose
        // Yaha ternary operator ka use kiya, it was indeed complicated, but still it made the code short, unlike if else ka nesting karta toh, aur bada hota
        if(User === "ROCK"){
            let rwin = (computerKaValue === "SCISSOR") ? "You Win this round, rock beats scissor" : (computerKaValue === "PAPER") ? "You lose, Paper beats rock" : "Its a tie!"
            return rwin 
        }
        else if(User === "SCISSOR"){
            let swin = (computerKaValue === "PAPER") ? "You Win this round, scissor cuts paper" : (computerKaValue === "ROCK") ? "You lose, Rock beats Scissor" : "Its a tie!"
            return swin 
        }
        else if(User === "PAPER"){
            let pwin = (computerKaValue === "ROCK") ? "You Win this round, paper beats rock" : (computerKaValue === "SCISSOR") ? "You lose, Scissor cuts Paper" : "Its a tie!"
            return pwin 
        }

}


    var win = 0;
    var lose = 0;

function game(){
    
    //The game will start only when a key is pressed
    var b = document.getElementById('BODY')
    b.addEventListener('keydown',hello);
    function hello(e){
        button1.addEventListener('click',r);
        button2.addEventListener('click',p);
        button3.addEventListener('click',s);
    }

    function r(e){

        //took the value from the function and stored it in u 
        let u = getComputerChoice();
        let uSelect;
        uSelect = "ROCK";
        let result = Play(u,uSelect);
        if(result.includes("Win"))
    {
        win++;
    }
    else if(result.includes("lose")){
        lose++;
    }
    //print the value
    score.textContent = result;

    if(roundCount === 5){
        if(win>lose){
        round.textContent = "You won the game!";
    }
    else if(lose>win){
        round.textContent = "You lose the game!";
    }
    else if(win === lose){
        round.textContent ="Its a tie!";
    }
    roundCount = 0;
    win = 0;
    lose = 0;
    }
    }
    function p(e){
        //took the value from the function and stored it in u 
        let u = getComputerChoice();
        let uSelect;
        uSelect = "PAPER";
        let result = Play(u,uSelect);
        if(result.includes("Win"))
    {
        win++;
    }
    else if(result.includes("lose")){
        lose++;
    }
    //print the value
    score.textContent = result;

    if(roundCount === 5){
        if(win>lose){
        round.textContent = "You won the game!";
    }
    else if(lose>win){
        round.textContent = "You lose the game!";
    }
    else if(win === lose){
        round.textContent ="Its a tie!";
    }
    roundCount = 0;
    win = 0;
    lose = 0;
    }
}
    function s(e){
        //took the value from the function and stored it in u 
        let u = getComputerChoice();
        let uSelect;
        uSelect = "SCISSOR";
        let result = Play(u,uSelect);
        if(result.includes("Win"))
    {
        win++;
    }
    else if(result.includes("lose")){
        lose++;
    }
    //print the value
    score.textContent = result;

    if(roundCount === 5){
        if(win>lose){
        round.textContent = "You won the game!";
    }
    else if(lose>win){
        round.textContent = "You lose the game!";
    }
    else if(win === lose){
        round.textContent ="Its a tie!";
    }
    roundCount = 0;
    win = 0;
    lose = 0;
    }
    }
    
}



    // for(let i = 0;i<5;i++)
    // {
        game();
    // }
    // console.log(`YOU : ${win} COMPUTER : ${lose}`);
    


