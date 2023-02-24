const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Code to gather information about the development team members.

const promptManager = (team) =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    }
  ]).then((answers) => {
    team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
    return team;
  });

const promptEngineer = (team) =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineer name?',
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is the engineer id?',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the engineer email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer github user name?',
    }
  ]).then((answers) => {
    team.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github))
    return team;
  });
const promptIntern = (team) =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the intern name?',
    },
    {
      type: 'input',
      name: 'internId',
      message: 'What is the intern id?',
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the intern email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern school name?',
    }
  ]).then((answers) => {
    team.push(new Engineer(answers.internName, answers.internId, answers.internEmail, answers.school))
    return team;
  });
  

// Start by prompting the manager information
const myTeam = async () => {
  let team = [];
  team = await promptManager(team);
  team = await promptEngineer(team);
  team = await promptIntern(team)
  const htmlDoc = render(team);
  await fs.writeFile(outputPath, htmlDoc);
}

myTeam();
