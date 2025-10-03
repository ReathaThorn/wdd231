const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

async function loadMembers() {
  try {
    const response = await fetch('members.json');
    const members = await response.json();

    membersContainer.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} - ${member.membership}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Website</a>
        <p>Membership: ${member.membership}</p>
      `;
      membersContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load members:', error);
    membersContainer.innerHTML = '<p>Error loading members.</p>';
  }
}

loadMembers();

gridBtn.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
  membersContainer.classList.add('grid-view');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.remove('grid-view');
  membersContainer.classList.add('list-view');
});
