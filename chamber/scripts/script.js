// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Update footer year dynamically
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // DOM elements
  const membersContainer = document.querySelector("#members");
  const gridBtn = document.querySelector("#grid");
  const listBtn = document.querySelector("#list");

  // Fetch members JSON
  async function getMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Filter only Gold or Silver members
      const filteredMembers = data.members.filter(
        member => member.membership === "Gold" || member.membership === "Silver"
      );

      displayMembers(filteredMembers);
    } catch (error) {
      console.error("Error loading members:", error);
      if (membersContainer) {
        membersContainer.innerHTML = "<p>Failed to load members. Please try again later.</p>";
      }
    }
  }

  // Display members
  function displayMembers(members) {
    if (!membersContainer) return;
    membersContainer.innerHTML = "";

    members.forEach(member => {
      const div = document.createElement("div");
      div.classList.add("member");

      div.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit ${member.name}'s Website</a>
        <p>Membership Level: ${member.membership}</p>
      `;

      membersContainer.appendChild(div);
    });
  }

  // Toggle views
  if (gridBtn) {
    gridBtn.addEventListener("click", () => {
      membersContainer.classList.remove("list-view");
    });
  }

  if (listBtn) {
    listBtn.addEventListener("click", () => {
      membersContainer.classList.add("list-view");
    });
  }

  // Initialize
  getMembers();

});
