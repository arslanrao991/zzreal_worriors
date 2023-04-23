const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = 
{
  tests: './arslan_phase3/*_apitest.js',
  output: './output',
  helpers: 
  {
    // Puppeteer: 
    // {
    //   url: 'http://localhost:3000/',
    //   show: true,
    //   windowSize: '1200x900'
    // }, 
    REST: 
    {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
  },
  include: 
  {
    I: './steps_file.js'
  },
  name: 'zzreal_worriors',
  lint: 
  {
    enabled: true,
    files: ["./arslan_phase3/*_apitest.js"],
    options: 
    {
      eslint: 
      {
        configFile: "./.eslintrc.json",
      },
    },
  },
}

