const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("show");
  menuButton.textContent = navList.classList.contains("show") ? "✖" : "☰";
});
