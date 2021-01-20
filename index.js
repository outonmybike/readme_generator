const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./readme_template.js');

var fileName = './dist/README.md'

const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Enter a title for the project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Enter a description:',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Enter a description for the project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Installation notes:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage notes:',
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'Contributors:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Project testing notes:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Github Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email contact instructions here:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your project:',
            choices: ['None','MIT']
        }
    ]);
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
            ok: true,
            message: 'File created'
            });
        });
    });
};

promptUser ()
    .then(answers => {
        console.log(answers)
        return answers
    })
    .then(answers => {
        var output = generateContent(answers)
        return output      
    })
    .then(stuffForPage => {
        return writeFile(stuffForPage);
    })
