// function x(y){
//     console.log("x")
//     y()
// }

// function y(){
//     console.log("y")
// }

// x(y)

// x(y())

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
      }, 1000);
    }, 1000);
}, 1000);
  