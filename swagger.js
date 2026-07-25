const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Homeschool Inventory API',
    description:
      'API for managing math and reading homeschool materials.'
  },
  host: 'homeschool-api-9w45.onrender.com',
  schemes: ['https'],
  tags: [
    {
      name: 'Math Materials',
      description: 'Operations for managing math inventory.'
    },
    {
      name: 'Reading Materials',
      description: 'Operations for managing reading inventory.'
    },
    {
      name: 'Authentication',
      description: 'Google OAuth authentication routes.'
    }
  ]
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);