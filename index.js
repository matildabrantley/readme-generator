const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (devResponse) => 
` 
# ${devResponse.title};

## ${devResponse.headerColor};
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'gitUser',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a brief description of your project?',
    },
    {
      type: 'input',
      name: 'installCommand',
      message: 'Which command installs dependencies?',
    },
    {
      type: 'input',
      name: 'testCommand',
      message: 'Which command runs tests?',
    },
    {
      type: 'input',
      name: 'repoInfo',
      message: 'What should a user know about your GitHub repository?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Under which license is this project published?',
    }
  ])
  .then((devResponse) => {
    const readmeContent = generateREADME(devResponse);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Created README.md!')
    );
  });
