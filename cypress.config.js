const { defineConfig } = require("cypress");  
  allowCypressEnv: true,
  require("dotenv").config();
module.exports = defineConfig({
  e2e: {
    env: {
      EMAIL: process.env.ADMIN_EMAIL,
      PASSWORD: process.env.ADMIN_PASSWORD,
    },
  },
});
  

