// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

// Fetch members from JSON
async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Display members
function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const div = document.createElement("div");
    div.classList.add("member");

    div.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit ${member.name}'s Website</a>
      <p>Membership Level: ${member.membership}</p>
    `;

    membersContainer.appendChild(div);
  });
}

// Toggle views
gridBtn.addEventListener("click", () => {
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
});

// Initialize
getMembers();
