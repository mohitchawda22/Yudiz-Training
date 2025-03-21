const time = document.getElementById("time")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const btn5 = document.querySelector(".btn5")
console.log(btn1);



let indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
let indiautc=new Date().toUTCString("en-US", { timeZone: "Asia/Kolkata" })

let londonTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
let londonutc=new Date().toUTCString("en-US", { timeZone: "Europe/London" })

let tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
let tokyoutc=new Date().toUTCString("en-US", { timeZone: "Asia/Tokyo" })

let new_YorkTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
let new_Yorkutc=new Date().toUTCString("en-US", { timeZone: "America/New_York" })

let sydneyTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" });
let sydneyutc=new Date().toUTCString("en-US", { timeZone: "Australia/Sydney" })





btn1.addEventListener("click",function(){
    time.innerHTML=`${indiaTime} <br>
    ${indiautc}`
})
btn5.addEventListener("click",function(){
    time.innerHTML=`${new_YorkTime} <br>
    ${new_Yorkutc}`
})
btn3.addEventListener("click",function(){
    time.innerHTML=`${tokyoTime} <br>
    ${tokyoutc}`
})
btn4.addEventListener("click",function(){
    time.innerHTML=`${londonTime} <br> ${londonutc}`
})
btn2.addEventListener("click",function(){
    time.innerHTML=`${sydneyTime} <br> ${sydneyutc}`
})



// India()
