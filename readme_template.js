const generateContent = contentArr => {
    return`# Project Title: ${contentArr.projectTitle}

## Description
${contentArr.projectDesc}

Read Me
File
Stuff
Table of Contents`;
};

module.exports = generateContent;