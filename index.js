const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'location',
      message: 'What is your location?',
      name: 'location',
    },
    {
        type: 'biography',
        message: 'What is your Biography?',
        name: 'biography',
      },
      {
        type: 'link',
        message: 'What is your LinkedIn profile URL?',
        name: 'LinkedIn',
      },
      {
        type: 'link',
        message: 'What is your GitHub profile url?',
        name: 'GitHub',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
