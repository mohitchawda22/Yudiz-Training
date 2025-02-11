const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise is resolved")
    },2000)
    // console.log("Promise is resolved")
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2 is resolved")
    },5000)
})

async function getData(){
    const val=await p // await is the keyword that is only used inside async function
    console.log(val)

    const val2=await p2
    console.log(val2)

}
getData()
    
// async function getData(){
//     const x=await p
//     console.log(x)
//     console.log("Hello World")
//     // console.log(p)
// }

