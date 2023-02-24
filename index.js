const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt(
  [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
      validate: validateInput
    },
    {
      type: 'input',
      message: 'What is Employee ID',
      name: 'emloyeeID',
      validate: validateInput
    },
    {
      type: 'email',
      message: `Please enter user's email`,
      name: 'email',
      default: () => { },
      validate: validateEmail
    },
    {
      type: 'input',
      message: 'What is your Office Number?',
      name: 'officeNumber',
      validate: validateNumber
    },
    {
      type: 'list',
      message: 'What is your Office Number?',
      choices: [new inquirer.Separator(),'Add engineer', new inquirer.Separator(),'Add Intern', new inquirer.Separator(),'Finish building the team',new inquirer.Separator()],
      name: 'addEmployee',
    },
  ]
)
  .then(response => {
    console.log(response)
  })



function validateEmail(email) {
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    console.log(".  Please enter a valid email");
    return false;
  }
}

function validateInput(val) {
  if (val.trim()) {
    return true
  } else {
    console.log(' Invalid Input.');
    return false
  }
}

function validateNumber (val) {
  if (parseInt(val.trim())) {
    return true
  } else {
    console.log(' Must be a Number');
    return false
  }
}