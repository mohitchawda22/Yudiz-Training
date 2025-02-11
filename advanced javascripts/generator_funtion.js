//A generator function in JavaScript allows you to pause and resume execution. It returns an iterator that can be controlled using .next() calls.
//Generator functions do not have arrow function counterparts.

// function* myFunction(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }

// const x=myFunction()

// for (const i of x){
//     console.log(i)
// }


function* y(start=0 ,end=Infinity,step=1){
    for (let i=start;i<end;i+=step){
        console.log(i);
        // yield i;
    }
}
const n=y(1,10,3).next()
console.log(n)
// // console.log(a)



// function* y(i){
//     yield i
//     yield i+10
// }
// const n =y(10)

// // console.log(n.next())
// for (const w of n){
//     console.log(w)
// }

