// Fetch the JSON data and render the teams
fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => displayTeams(data));

function displayTeams(data) {
  // Select the members container in the HTML
  const container = document.getElementById("members-container");
  container.innerHTML = ""; // Clear any existing content

  // Add a header
  const title = document.createElement("h2");
  title.textContent = data.name;
  title.className = "mb-4 text-center";
  container.appendChild(title);

  // Loop through each team and display the information
  data.children.forEach((teamData) => {
    const teamSection = document.createElement("div");
    teamSection.className = "mb-5";

    // Team Name and Lead
    teamSection.innerHTML = `
      <h3>${teamData.team}</h3>
      <p><strong>Team Lead:</strong> ${teamData.teamLead}</p>
    `;

    // Members List
    const memberList = document.createElement("ul");
    memberList.className = "list-group";

    teamData.members.forEach((member) => {
      const memberItem = document.createElement("li");
      memberItem.className = "list-group-item";
      memberItem.textContent = member;
      memberList.appendChild(memberItem);
    });

    teamSection.appendChild(memberList);
    container.appendChild(teamSection);
  });
}
