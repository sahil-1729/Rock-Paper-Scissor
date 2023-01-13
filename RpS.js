function getComputerChoice()
{
    //constant storing any random number so that, computer konsa bhi random value le sake, usko 100 kiya usko koi primary reason nahi tha, could have taken 10 also 
    const n = Math.floor(Math.random()*10)
    //THIS COMMENTED PART WAS DONE TO CHECK WHETHER THE NUMBER WAS RANDOM OR NOT
    // console.log(Math.floor(Math.random()*100));
    
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
    // to let user know what the User chose, and what the computer chose
    console.log(`you : ${User} | Computer : ${computerKaValue}`);
    console.log("<RESULT>");
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
    //took the value from the function and stored it in u 
    let u = getComputerChoice();
    //To let user choose the options
    const uSelect = prompt("Rock, Paper, Scissor?")
    // Jo result hai usko store kiya in result variable
    let result = Play(u,uSelect);
    if(result.includes("Win"))
    {
        win++;
    }
    else if(result.includes("lose")){
        lose++;
    }
    //print the value
    console.log(result);
}
    for(let i = 0;i<5;i++)
    {
        game();
    }
    console.log(`YOU : ${win} COMPUTER : ${lose}`);
    if(win>lose){
        console.log("You won!")
    }
    else if(lose>win){
        console.log("You lose!");
    }
    else if(win === lose){
        console.log("Its a tie!");
    }
    // const a = prompt("Enter the number");
    // var a;
    //     a = prompt("Enter number",0);
    // for(let i = 2;i<a;i++)
    // {
    //     if(i === 2 || i === 3 || i === 5 || i === 7){
    //         alert(i);
    //     }
    //     if(i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0)
    //     {
    //         alert(i);
    //     }
    // }
