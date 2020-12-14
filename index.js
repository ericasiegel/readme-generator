const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of general questions for user
const promptUser = () => {
    return inquirer.prompt([
        // enter user's name
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name!');
                    return false;
                }
            }
        },
        // enter user's GitHub
        {
            type: 'input',
            name: 'userGithub',
            message: 'What is the link to your GitHub? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter GitHub link!');
                    return false;
                }
            }
        },
        //enter user's email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your email!');
                    return false;
                }
            }
        },
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
        
        // project license question
        {
            type: 'list',
            name: 'license',
            message: "Pick your License from the choices below:",
            choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2 Clause 'Simplified' License", "BSD 3 Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
            default: "No License"
        },
        // confirm tests section
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to provide testing information?',
            default: true
        },
        // project tests question
        {
            type: 'input',
            name: 'test',
            message: 'How can the user test your project',
            when: ({ confirmTest }) => confirmTest
        },
        // confirm contributing section
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like to provide contributing information?',
            default: true
        },
        // project tests question
        {
            type: 'input',
            name: 'contribute',
            message: 'How can the user contribute to your project?',
            when: ({ confirmContribute }) => confirmContribute
        },
        // project languages
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        }

    ]);
};

// install or app instructions section
const promptAuthors = authorData => {
    console.log(`
    =============
    Add Author(s)
    =============
    `);

    // if there's no 'install instructions' array property, create one
    if (!authorData.authors) {
        authorData.authors = [];
    }

    return inquirer
        .prompt([
            // project license question
            {
                type: 'input',
                name: 'author',
                message: 'Author Name: (Required)',
                validate: authorInput => {
                    if (authorInput) {
                        return true;
                    } else {
                        console.log('Enter Author Name(s)!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Link to Author's GitHub: (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Enter GitHub!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddAuthor',
                message: 'Would you like to add another author?',
                default: false
            }
            
        ])
        .then(contributorData => {
            authorData.authors.push(contributorData);
            if (contributorData.confirmAddAuthor) {
                return promptAuthors(authorData);
            } else {
                return authorData;
            }
        });
};

// features section
const promptFeatures = featuresData => {
    console.log(`
    ==============
    Add Feature(s)
    ==============
    `);

    // if there's no 'features' array property, create one
    if (!featuresData.features) {
        featuresData.features = [];
    }

    return inquirer
        .prompt([
            // project license question
            {
                type: 'input',
                name: 'features',
                message: 'List feature:',
            },
            {
                type: 'confirm',
                name: 'confirmAddFeature',
                message: 'Would you like to add another feature?',
                default: false
            }
            
        ])
        .then(projFeatData => {
            featuresData.features.push(projFeatData);
            if (projFeatData.confirmAddFeature) {
                return promptFeatures(featuresData);
            } else {
                return featuresData;
            }
        });
};

// install or app instructions section
const promptInstall = installData => {
    console.log(`
    ======================================
    Add App or Install Instruction Step(s)
    ======================================
    `);

    // if there's no 'install instructions' array property, create one
    if (!installData.instructions) {
        installData.instructions = [];
    }

    return inquirer
        .prompt([
            // project license question
            {
                type: 'input',
                name: 'instructions',
                message: 'List instruction step:',
            },
            {
                type: 'confirm',
                name: 'confirmAddInstruct',
                message: 'Would you like to add another step?',
                default: false
            }
            
        ])
        .then(installInstructData => {
            installData.instructions.push(installInstructData);
            if (installInstructData.confirmAddInstruct) {
                return promptInstall(installData);
            } else {
                return installData;
            }
        });
};

// add screenshot section
const promptPic = picData => {
    console.log(`
    =================
    Add A Screenshot
    =================
    `);

    // if there's no 'pictures' array property, create one
    if (!picData.screenShot) {
        picData.screenShot = [];
    }

    return inquirer
        .prompt([
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
                name: 'link',
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
            {
                type: 'confirm',
                name: 'confirmAddPicture',
                message: 'Would you like to add another screenshot?',
                default: false
            }
            
        ])
        .then(pictureData => {
            picData.screenShot.push(pictureData);
            if (pictureData.confirmAddPicture) {
                return promptPic(picData);
            } else {
                return picData;
            }
        });
};


promptUser()
    .then(promptAuthors)
    .then(promptFeatures)
    .then(promptInstall)
    .then(promptPic)
    .then(picData => {
        const readme = generateMarkdown(picData);
        fs.writeFile('./dist/README.md', readme, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('README created! Go to the "dist" folder to see it!')
        })
    })
