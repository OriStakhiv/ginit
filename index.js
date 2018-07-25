var files = require('./lib/files');

var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')){
    console.log(chalk.red('Already a git repositoty.'))
    process.exit();
}

function getGithubCredentials(callback){
    var questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter your username or e-mail: ',
            validate: function(value) {
                if (value.length){
                    return true;
                }
                else{
                    return 'Enter your username or e-mail:';
                }

            }
        },

        {
            name: 'password',
            type: 'password',
            message: 'Enter your password: ',
            validate: function(value){
                if (value.length) {
                    return true;

                }
                else{
                    return 'Enter your password: '
                }

                }
            }
        }
    ]
}