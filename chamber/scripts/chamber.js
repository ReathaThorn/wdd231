// Fetch members from JSON and render
async function displayMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  const membersContainer = document.getElementById('members');
  membersContainer.innerHTML = ''; // Clear container

  members.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    memberDiv.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership: ${member.membership}</p>
    `;

    membersContainer.appendChild(memberDiv);
  });
}

// Initialize Grid/List Toggle
function setupViewToggle() {
  const gridBtn = document.getElementById('grid-view');
  const listBtn = document.getElementById('list-view');
  const membersContainer = document.getElementById('members');

  gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
  });

  listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
  });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  displayMembers();
  setupViewToggle();
});
