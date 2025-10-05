// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set timestamp
document.getElementById("timestamp").value = new Date().toLocaleString();

// Modal functionality
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.parentElement.parentElement.style.display = "none";
  });
});

window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};
