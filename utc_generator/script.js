const time=document.getElementById("Time")



// console.log(utc_time);

function getValue(){
    const utc_time=document.getElementsByClassName("utc")[0].value
    console.log(utc_time);
    const location=document.getElementsByClassName("location")[0].value
    console.log(location);
    const format=document.getElementsByClassName("format")[0].value
    console.log(format);
    
}
getValue()

let tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
console.log("Current Time in Tokyo: " + tokyoTime);
 
// Convert Tokyo time to London time
let londonTime = new Date(tokyoTime).toLocaleString("en-US", { timeZone: "Europe/London" });
console.log("Corresponding Time in London: " + londonTime);

function generateTime(utc_time,location,format){
    
    

    
}

