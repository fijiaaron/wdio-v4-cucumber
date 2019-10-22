var screenerConfig = require('./screener.config');

//If you would like to run on Edge or Safari, you need to have a Sauce Labs account
  screenerConfig.browsers = [
    {
      browserName: 'safari',
      version: '11.1',
    }
  ];
  screenerConfig.sauce = {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
      //extendedDebugging: true, // optional
      //tunnelIdentifier: 'MyTunnel01' // optional
      
    };

  module.exports = screenerConfig;