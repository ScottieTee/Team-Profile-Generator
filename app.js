const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const Manager = require('.lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'What is your name?'
        },
        {
         type: 'input',
         name: 'employeeId',
         message: 'Please enter your Employee ID.'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter your email address'
           },
           {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number'
              },    
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
       {
          type: 'list',
          name: 'menu',
          message: "Please select the employee type:",
          choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        }])
        .then(userChoice => {
            switch(userChoice.menu) {
                case "add an engineer":
                promptEngineer();
                break;
                case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log ('ADD A NEW ENGINEER');

    return inquirer.prompt([
       {
        type: 'input',
         name: 'name',
         message: 'Please enter the name of the engineer'
        },
        {
         type: 'input',
         name: 'employeeId',
         message: 'Please enter the Employee ID of the engineer.'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter the email address of the engineer'
           },
           {
            type: 'input',
            name: 'githubUser',
            message: 'Please enter the GitHub username of the engineer'
              },    
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUser);
        teamMembers.push(engineer);
        promptMenu();
    })
};
const promptIntern = () => {
    console.log ('ADD A NEW INTERN');

    return inquirer.prompt([
       {
        type: 'input',
         name: 'name',
         message: 'Please enter the name of the intern'
        },
        {
         type: 'input',
         name: 'employeeId',
         message: 'Please enter the Employee ID of the intern.'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Please enter the email address of the intern'
           },
           {
            type: 'input',
            name: 'school',
            message: 'Please enter the school of the intern'
              },    
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('FINISH BUILDING MY TEAM!');
    

    //create an output directory?
}