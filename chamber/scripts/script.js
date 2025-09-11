// scripts/script.js

// Function to fetch member data
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

// Function to display members in the directory
function displayMembers(members) {
  const directory = document.getElementById('directory');
  directory.innerHTML = ''; // Clear previous content

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';

    // Add membership level as a class
    if (member.membershipLevel === 2) card.classList.add('silver');
    if (member.membershipLevel === 3) card.classList.add('gold');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
    `;

    directory.appendChild(card);
  });
}

// Toggle view buttons
document.getElementById('gridBtn').addEventListener('click', () => {
  document.getElementById('directory').className = 'grid';
});

document.getElementById('listBtn').addEventListener('click', () => {
  document.getElementById('directory').className = 'list';
});

// Initialize
fetchMembers();

