document.addEventListener("DOMContentLoaded", () => {
  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Grid/List view toggle
  const directory = document.getElementById("directory");
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");

  gridBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
  });

  listBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
  });
});
