const app = require("../server");

// Wrap the app to handle requests as a serverless function
module.exports = (req, res) => {
  app(req, res); // Pass the request and response to the express app
};
