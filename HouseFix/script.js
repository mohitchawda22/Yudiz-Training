// const toggleOpen = document.querySelector(".navbar-collapse")
// const toggleClose = document.querySelector(".toggle-close")

// // console.log(navlinks)

// toggleOpen.addEventListener("click", open)
// toggleClose.addEventListener("click", close)

// function open() {
//     navlinks.style.transform = "translateX(0px)"
// }

// function close() {
//     navlinks.style.transform = "translateX(1000px)"
// }

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".navbar-collapse");
  
    toggler.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
});