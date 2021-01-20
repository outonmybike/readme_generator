module.exports = contentArr => {
    const {title, desc, install, usage, contrib, test, github, email } = contentArr;
    return`# Project Title: ${title}

## Description
${desc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## License



## Contributing

${contrib}

## Tests

${test}

## Questions

For questions, contact GibHub user [${github}](https://github.com/${github}).

${email}

`;
};
