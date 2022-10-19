const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your Biography?',
      name: 'biography',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile URL?',
      name: 'LinkedIn',
    },
    {
      type: 'input',
      message: 'What is your GitHub profile url?',
      name: 'GitHub',
    },
  ])
  .then(js.appendFile('index2.html', `<!DOCTYPE html>\n
  <html lang="en">\n
  <head>\n
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\n
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n
      <title>Profile Generator</title>\n
  </head>\n
  <body>\n
      <header class="jumbotron jumbotron-fluid">\n
          <h1 class="container display-4">Profile Generator</h1>\n
      </header>\n
      <section class="container">\n
          <p class="card" id="name">${inquirer.name}</p>\n
          <p class="card" id="location">${inquirer.location}</p>\n
          <p class="card" id="biography">${inquirer.biography}</p>\n
          <p class="alert alert-warning" role="alert" id="linkedIn">${inquirer.LinkedIn}</p>\n
          <p class="alert alert-danger" role="alert" id="GitHub">${inquirer.GitHub}</p>\n
      </section>\n
  </body>\n
  </html>`)
  );


(response) =>
  response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')