// APPLICATION PACKAGES
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// QUESTIONS ARRAY FOR USER INPUT
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title'
  },

  {
    type: 'input',
    name: 'description',
    message: 'Enter project description'
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Enter web-application installation instructions'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter text for usage section'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines'
  },

  {
    type: 'input',
    name: 'test',
    message: 'Enter test guidelines'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Select a license (leave blank if no license)',
    choices: [
      '',
      'Academic Free License v3.0',
      'Apache license 2.0',
      'Artistic license 2.0',
      'Boost Software License 1.0',
      'BSD 2-clause "Simplified" license',
      'BSD 3-clause "New" or "Revised" license',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU General Public License v3.0',
      'GNU Lesser General Public License v2.1',
      'GNU Lesser General Public License v3.0',
      'MIT',
      'Mozilla Public License 2.0',
      'The Unlicense'
    ]
  },

  {
    type: 'input',
    name: 'username',
    message: 'Enter Github username'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter email address'
  },

];


// FUNCTION TO WRITE README FILE
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err)
    }
  })
}


//  FUNCTION TO INITIATIZE APP
function init() {
  inquirer.prompt(questions).then(answers => {
    writeToFile('README.md', generateMarkdown(answers));
  }) 
}

function test() {
  const answers = {
    title: "Readme Generator",
    description: "Create an application that generates a professional readme file",
    installation: "Clone repository: `git clone git@github.com:Hammarou/README-Gen.git`",
    usage: "dfgddfgdfssdfgsf",
    contribution: "gdfgfddsfhdfshsdf",
    test: "sdfgsdfgsrhhwhrej",
    license: "MIT",
    username: "Crayon123",
    email: "456@email.com"
  }
  writeToFile('README.md', generateMarkdown(answers));
}
// FUNCTION CALL TO INITIALIZE APP
init();

