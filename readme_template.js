const generateContent = contentArr => {
    return`# Project Title: ${contentArr.projectTitle}

## Description
${contentArr.projectDesc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Instalation

## Usage

## License

## Contributing

## Tests

## Questions

`;
};

module.exports = generateContent;