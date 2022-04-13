const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const Manager = require('.lib/Manager');
const Engineer = require('./lib/Engineer');
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
        }    
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();

    })