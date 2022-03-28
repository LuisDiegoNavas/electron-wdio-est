import { join } from 'path';
// const fs = require('fs');

// const { environment, proxy } = require('yargs').argv

// require('custom-env').env(true)

// const path = require('path')
// const dotenv = require('dotenv')

// // const CustomReporter = require('testrail-wdio-custom-reporter')

// const config = require('./capabilities')[environment || 'web']

// dotenv.config()

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      files: true,
      project: join(__dirname, 'tsconfig.json'),
    },
  },

  //specs: ['./test/specs/**/*.ts'],
  specs: ['./test/*.spec.ts'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,

/*   capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      //binary: '/Applications/Anatha.app/Contents/MacOS/Anatha',
      binary: './Anatha.app/Contents/MacOS/Anatha',
    }
  }], */
  capabilities: [{}],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'debug',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
  //port: 9515,
  services: [
          [
              'electron',
              {
                appPath: join(__dirname, 'dist'),
                // appPath: path.join(__dirname, 'Anatha.app/Contents/MacOS/Anatha'),
                //appName: 'Anatha',
                appName: 'wdio-electron-service-example',
                //appArgs: ['--headless', '--disable-dev-shm-usage'],
                chromedriver: {
                  //port: 9519,
                  args: ['--headless', '--disable-dev-shm-usage'],
                  //logFileName: 'wdio-chromedriver.log',
                },
              },
            ]
  ],

  framework: 'mocha',

  //reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
