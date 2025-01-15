let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")


// console.log(count); 

// let myage=25
// console.log(myage);

// let Myage=25
// let humanDogRatio=7
// let myDogAge=Myage*humanDogRatio
// console.log(myDogAge)


function increament(){
    count=count+1
    countEl.textContent=count
}

function save() {
    let countStr = count + " - "
    // saveEl.textContenttStr
    saveEl.innerText= saveEl.innerText+countStr
    countEl.innerHTML=0
    // console.log(count);
    count = 0
   
    
}
console.log("Let's count people on the subway!")