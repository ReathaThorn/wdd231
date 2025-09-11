// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Load members
async function loadMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

// Function to return badge icon
function getBadge(level) {
  switch (level.toLowerCase()) {
    case "gold":
      return "⭐";    // Gold star
    case "silver":
      return "🥈";    // Silver medal
    case "member":
      return "🟦";    // Blue square
    default:
      return "";
  }
}

function displayMembers(members) {
  const container = document.getElementById("directory");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Add membership class
    const level = member.membership.toLowerCase();
    card.classList.add(level);

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">Membership: ${getBadge(member.membership)} ${member.membership}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle views
document.getElementById("gridBtn").addEventListener("click", () => {
  document.getElementById("directory").classList.add("grid");
  document.getElementById("directory").classList.remove("list");
});

document.getElementById("listBtn").addEventListener("click", () => {
  document.getElementById("directory").classList.add("list");
  document.getElementById("directory").classList.remove("grid");
});

loadMembers();

