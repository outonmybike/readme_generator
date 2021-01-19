const inquirer = require('inquirer');
const fs = require('fs');
const generateContent = require('./readme_template.js');

// var responses = { projectTitle: 'dan', projectDesc: 'yourmom' }
// var responses = 'dan'
// var fileContent = 'Write this to a file'
var fileName = './dist/README.md'
// var stuffToWrite = generateContent(fileContent);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Project Title:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a title for the project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Project Description:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter a description for the project');
                    return false;
                }
            }
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

// var output = generateContent(responses);
// console.log(output)

    // .then()
    // .then(fileContent => {
    //     fs.writeFile(fileName,fileContent, function(err) {
    //         if(err) {
    //             return console.log(err);
    //         }
    //         console.log('success');
    //     })
    // } )


    // fs.writeFile('./test.txt', JSON.stringify(answers), function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log('success');
    // })


// fs.writeFile(fileName, stuffToWrite, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log(fileName, 'was written successfully');
// })