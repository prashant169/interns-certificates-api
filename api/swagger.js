// server/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your project',
    },
    servers: [
      {
        url: 'http://3.7.66.66:7000', // Replace with your API's base URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Assuming your route files are in a 'routes' folder
};

const specs = swaggerJsdoc(options);

module.exports = specs;