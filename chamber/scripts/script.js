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
