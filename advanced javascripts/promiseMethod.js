//promise all()

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("hi")
//     },1000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("hello")
//     },2000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("hello")
//     },5000)
// })

// let x=Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
//     return res
// }).catch((err)=>{
//     console.error(err.errors)
// })

// setTimeout(()=>{
//     console.log(x)
// },6000)

// const p1 = new Promise((resolve, reject) => {
//     const timerId = setTimeout(() => {
//         reject("hello");
//     }, 3000);
    
//     // Add cleanup for promise resolution
//     resolveCleanup = () => clearTimeout(timerId);
// });

// const p2 = new Promise((resolve, reject) => {
//     const timerId = setTimeout(() => {
//         resolve("hello");
//     }, 1000);
    
//     resolveCleanup = () => clearTimeout(timerId);
// });

// const p3 = new Promise((resolve, reject) => {
//     const timerId = setTimeout(() => {
//         resolve("hello");
//     }, 5000);
    
//     resolveCleanup = () => clearTimeout(timerId);
// });

// Promise.any([p1, p2, p3]).then((res) => {
//     console.log(res); // Will log "hello"
    
//     // If p2 resolves first, you can cancel other timeouts (not used here directly).
//     clearTimeout(timerId);
//     clearTimeout(timerId);
// });



//promise race


await setTimeout(()=>{
    console.log(9);
    
},2*1000)