const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    inquirer.prompt([
        // project name question
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter Project Title!');
                    return false;
                }
            }
        },
        // project authors question
        {
            type: 'input',
            name: 'author',
            message: 'Who was the author(s) of this project? (Required)',
            validate: authorInput => {
                if (authorInput) {
                    return true;
                } else {
                    console.log('Enter Author Name(s)!');
                    return false;
                }
            }
        },
        // project description question
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Enter A Description!');
                    return false;
                }
            }
        },
         // project motivation question
         {
            type: 'input',
            name: 'motivation',
            message: 'What was the motivation for this project? (Required)',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Enter Project Motivation!');
                    return false;
                }
            }
        },
        // project link question
        {
            type: 'input',
            name: 'link',
            message: 'What is the deployed link of the project? (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter Project Link!');
                    return false;
                }
            }
        },
        // project usage question
        {
            type: 'input',
            name: 'usage',
            message: 'What will your project be used for? (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter Project Usage!');
                    return false;
                }
            }
        },


        // confirm Install instructions
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to enter Installation instructions?',
            default: true
        },
        // project install instructions question
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmInstall }) => confirmInstall
        },
        // confirm license section
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to enter License information?',
            default: true
        },
        // project license question
        {
            type: 'input',
            name: 'license',
            message: 'Provide Licensing information',
            when: ({ confirmLicense }) => confirmLicense
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },


        // images
        {
            type: 'input',
            name: 'caption',
            message: 'What is the caption for your screenshot? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter screenshot caption!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'alt',
            message: 'Provide a alt description of the screenshot (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter your screenshot alt description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imageLink',
            message: 'Enter the link to the screenshot. (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Please enter your screenshot link!');
                    return false;
                }
            }
        },

    ])
    .then(answers => console.log(answers))
];

// function to write README file
    const readme = generateMarkdown(data);
    fs.writeFile('./dist/README.md', readme, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README created! Go to the dist folder to see it!')
    })

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
