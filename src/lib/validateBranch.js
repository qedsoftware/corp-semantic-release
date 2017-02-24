'use strict';

const log = require('./log');
let shell = require('shelljs');   // Make this a variable to permit mocking during testing

module.exports = function validateBranch(branch) {
  shell.exec('git branch').output;
  let currentBranch = shell.exec('git rev-parse --abbrev-ref HEAD').output.split('\n')[0];

  if (branch !== currentBranch) {
    log.error(`You can only release from the ${branch} branch. Use option --branch to specify branch name.`);
    shell.exit(1);
  } else {
    log.info(`>>> Your release branch is: ${branch}`);
  }
};
