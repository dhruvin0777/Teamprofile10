const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array to hold team members
const teamMembers = [];

// Function to prompt user to add a team member
function addTeamMember() {
  inquirer.prompt([
    {
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "Finish"]
    }
  ]).then(answers => {
    switch (answers.role) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Finish":
        generateTeamPage();
        break;
      default:
        console.log("Invalid choice");
        addTeamMember();
    }
  });
}

// Function to prompt user to add a manager
function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?"
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    addTeamMember();
  });
}

// Function to prompt user to add an engineer
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?"
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?"
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    addTeamMember();
  });
}

// Function to prompt user to add an intern
function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?"
    },
    {
      type: "input",
      name: "school",
      message: "What school does the intern attend?"
    }
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    addTeamMember();
  });
}

function htmlBuilder () {
  console.log("Team created!")

  fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

runApp();