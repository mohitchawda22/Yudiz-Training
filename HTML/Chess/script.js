const gameBoard=document.querySelector('#gameBoard');
// console.log(gameBoard)
const pieces=[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook

]

function createBoard(){
    pieces.forEach((pieces,i)=>{
       const square= document.createElement("div")
       square.classList.add("square")
       square.innerHTML=pieces
       square.setAttribute("square-id",i)

       square.firstChild?.setAttribute("draggable","true")
       const row =Math.floor((63-i)/8)+1
       if (row%2===0){
        square.classList.add(i%2===0?"brown":"beige")
       }else{
        square.classList.add(i%2===0?"beige":"brown")
       }

       if (i<=15){
        square.firstChild.firstChild.classList.add("black")
       }else if(i>=48){
        square.firstChild.firstChild.classList.add("white")
    }
       gameBoard.append(square)
    })
}
createBoard()
// console.log(pieces)


const allSquares=document.querySelectorAll("#gameBoard .piece")
allSquares.forEach(square=>{
    square.addEventListener("dragstart",dragStart)
    square.addEventListener("dragover",dragOver)
    square.addEventListener("drop",dargDrop)
})

let startPositionId
let draggedElement

function dragStart(e){
    startPositionId=e.target.parentNode.getAttribute("square-id");
    draggedElement=e.target
}

function dragOver(e){
    e.preventDefault()
}

function dargDrop(e){
    e.stopPropagation()
    e.target.parentNode.append(draggedElement)
    // e.target.append(draggedElement) 

}