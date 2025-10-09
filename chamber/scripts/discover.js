document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Visit counter
const visitMessage = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const today = Date.now();

if (lastVisit) {
const daysSince = Math.floor((today - Number(lastVisit)) / (1000 * 60 * 60 * 24));
if (daysSince < 1) {
visitMessage.textContent = "Welcome back! You visited today.";
} else {
visitMessage.textContent = `Welcome back! It's been ${daysSince} day(s) since your last visit.`;
}
} else {
visitMessage.textContent = "Welcome! This is your first visit.";
}

localStorage.setItem("lastVisit", today);
