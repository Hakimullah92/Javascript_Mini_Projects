const navbar = document.querySelector(".navbar-list"),
  menuicon = document.querySelector(".menu-icon"),
  close = document.querySelector(".close");

menuicon.addEventListener("click", function () {
  navbar.classList.add("active");
});

close.addEventListener("click", function () {
  navbar.classList.remove("active");
});
