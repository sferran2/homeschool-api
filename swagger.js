const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Homeschool Inventory API',
    description:
      'API for managing math and reading homeschool materials.'
  },
  host: 'homeschool-api-9w45.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);