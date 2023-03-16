function generateHTML(teamData) {
    const managerHTML = teamData.manager ? `
        <div class="card">
          <div class="card-header">
            <h2>${teamData.manager.name}</h2>
            <h3>Manager</h3>
          </div>
          <div class="card-body">
            <ul>
              <li>ID: ${teamData.manager.id}</li>
              <li>Email: <a href="mailto:${teamData.manager.email}">${teamData.manager.email}</a></li>
              <li>Office Number: ${teamData.manager.officeNumber}</li>
            </ul>
          </div>
        </div>
      ` : '';
  
    const engineerHTML = teamData.engineers.map((engineer) => `
        <div class="card">
          <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
          </div>
          <div class="card-body">
            <ul>
              <li>ID: ${engineer.id}</li>
              <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
          </div>
        </div>
      `).join('');
  
    const internHTML = teamData.interns.map((intern) => `
        <div class="card">
          <div class="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
          </div>
          <div class="card-body">
            <ul>
              <li>ID: ${intern.id}</li>
              <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li>School: ${intern.school}</li>
            </ul>
          </div>
        </div>
      `).join('');
  
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Roster</title>
          <link rel="stylesheet" href="style.css">
        </head>
        <body>
          <header>
            <h1>My Team</h1>
          </header>
          <main>
            ${managerHTML}
            ${engineerHTML}
            ${internHTML}
          </main>
        </body>
      </html>
    `;
  
    return html;
  }