// const cart = ["apple", "orange", "banana"];

// createOrder(cart)
//   .then(function (orderId) {
//         console.log(orderId);
//         return orderId
//   })
//   .then(function (orderId) {
//         // payment(orderId);
//         return payment(orderId);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//   })

// function createOrder(orderId) {
//   return new Promise((resolve, reject) => {
//     const orderId = 123;
//     if (orderId) {
//       setTimeout(() => {
//         console.log("Order created");
//       }, 2000);
//       resolve(orderId);
//     }
//     if(!orderId) {
//         const err=reject(new Error("Order not created"));
//     //   reject("order is rejected");
//     }
//   });
// }

function payment(id) {
  return new Promise((resolve,reject) => {
    const id =12
    if (true){
      setTimeout(() => {
        resolve("payment done")
      },1000)
    }
    else{
      reject("payment not done")
    }
  })
}


function fetchData() {
  return new Promise((resolve, reject) => {
    if(false){
      setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    }
    else{
       reject('Data not fetched');
    }  
  });
}

fetchData()
  .then((result) => {
      console.log(result); 
      return result// Output: Data fetched
  }).catch((error) => {
      console.error(error);
      // return error
  })
  .then((id) => {
      payment(id); // Output
  })
  .catch((error) => {
      console.error(error);
  });