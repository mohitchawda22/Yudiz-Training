

const p =new Promise((resolve,reject)=>{
    resolve("promise value")
})

async function getData(){
    return p;
}

const dataPromise=getData()

dataPromise.then(data=>console.log(data))

// console.log(dataPromise) // Promise { 'Hello World' }
