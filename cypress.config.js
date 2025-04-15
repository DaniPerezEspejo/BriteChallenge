const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {      
      // Load environment configuration. By default, should be "local" or "staging" instead of "prod".
      // For the sake of this challenge we'll leave prod as default as we'll test against external webpages.
      const environmentName = config.env.environmentName || 'prod';
      const environmentFileName = `./${environmentName}.settings.json`;

      console.log(`Loading ${environmentName} settings`);

      const settings = require(environmentFileName);

      if (settings.baseClientUrl) {
        config.baseUrl = settings.baseClientUrl;
      }

      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env
        }
      }

      console.log(`Loaded settings for environment ${environmentName}`);
      
      return config;
    },
  },
});
