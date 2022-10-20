const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'What is your password?',
      name: 'password'
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location'
    },
    {
      type: 'input',
      message: 'What is your Biography?',
      name: 'biography'
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile URL?',
      name: 'LinkedIn'
    },
    {
      type: 'input',
      message: 'What is your GitHub profile url?',
      name: 'GitHub'
    }
  ]).then((response) =>
    fs.writeFile('index.html', `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>Profile Generator</title>
  </head>
  <body>
      <header class="jumbotron jumbotron-fluid">
          <h1 class="container display-4">Profile Generator</h1>
      </header>
      <section class="container">
          <p class="card" id="name">${(response.name)}</p>
          <p class="card" id="location">${(response.location)}</p>
          <p class="card" id="biography">${(response.biography)}</p>
          <p class="alert alert-warning" role="alert" id="linkedIn">${(response.LinkedIn)}</p>
          <p class="alert alert-danger" role="alert" id="GitHub">${response.GitHub}</p>
      </section>
  </body>
  </html>`, function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log('Answers logged!')
    }
  }
  ))