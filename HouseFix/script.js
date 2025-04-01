document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");
  const closeBtn = document.querySelector(".close-btn");

  function closeMenu() {
      collapse.classList.remove("show");

  }

  toggler.addEventListener("click", function () {
      collapse.classList.toggle("show");
  });

  closeBtn.addEventListener("click", closeMenu);

});