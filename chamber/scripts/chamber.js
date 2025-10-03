const membersContainer = document.querySelector('#members');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to load JSON data');

    const members = await response.json();

    members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member');

      memberCard.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} - ${member.membership}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Website</a>
        <p>Membership: ${member.membership}</p>
      `;
      membersContainer.appendChild(memberCard);
    });
  } catch (error) {
    console.error(error);
    membersContainer.innerHTML = '<p>Failed to load members. Please try again later.</p>';
  }
}

getMembers();
