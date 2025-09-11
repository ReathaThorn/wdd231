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

  // Load members from JSON
  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(member => {
        const card = document.createElement("div");
        card.className = `member-card ${member.membershipLevel === 3 ? 'gold' : member.membershipLevel === 2 ? 'silver' : ''}`;

        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        directory.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading members:", err));
});
