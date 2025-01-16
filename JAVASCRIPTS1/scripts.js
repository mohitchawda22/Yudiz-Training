let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cardEl=document.getElementById("card-el");
// let sl=document.getElementById("second-card");
let sum=firstCard+secondCard;
let cards=[firstCard,secondCard]
let hasBlackJack=false;
let isAlive=true;
let meassage="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el")
// document.getElementById("btn");


function startgame(){
    rendergame()
    cardEl.textContent="Cards:"+ cards[0] + "," +cards[1];
}

function getRandomCard(){
    let randomno=Math.floor(Math.random()*13)+1
    return randomno
}

function rendergame(){
    // cardEl.textContent="Cards:"
    // for(let i=0;i<cards.length;i++){
    //     cardEl.textContent+=cards[i]+" "
    // }
    sumEl.textContent="Sum:" +sum
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

function newCard(){
    console.log("Drawing a new card from the deck!");
    let card=getRandomCard()
    // console.log(cardEl.textContent)
    cardEl.textContent+= "," +card;
    sum+=card
    // cards.push(card)
    // console.log(cards);
    rendergame()
}

// console.log(sumEl);
// console.log(cardEl);


// console.log(sum);

// function sum(a,b){
//     return a+b
// }

// function sum(a,b,c){
//     return a+b+c;
// }

// sum(1,2,3);
