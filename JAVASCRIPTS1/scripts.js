let firstCard=11;
let secondCard=10;
let cardEl=document.getElementById("card-el");
// let sl=document.getElementById("second-card");
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let meassage="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el")
// document.getElementById("btn");

function startgame(){
    sumEl.textContent="Sum:" +sum
    cardEl.textContent="Cards:"+ firstCard + "," +secondCard;
    if (sum <= 20) {
        message=("Do you want to draw a new card? 🙂")
    } else if (sum === 21) {
        message=("Wohoo! You've got Blackjack! 🥳")
        hasBlackJack=true
    } else {
        message=("You're out of the game! 😭")
        isAlive=false
    }
   messageEl.textContent=message;
}
// console.log(sumEl);
// console.log(cardEl);


// console.log(sum);
