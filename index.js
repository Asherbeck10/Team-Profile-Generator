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





//render the HTML file
let team=[];
writeToHTML()
async function writeToHTML(){
team.push(new Manager("Bob",001,"bob@g.com",1001))
team.push(new Engineer("John",002,"john@g.com","john10"))
team.push(new Intern("Erik",020,"e@g.com","The coding school"))
let htmlDoc=render(team)
await fs.writeFile("index.html",htmlDoc)
}
console.log(team)