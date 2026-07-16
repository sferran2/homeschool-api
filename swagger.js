const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Homeschool Inventory API',
    description:
      'API for managing math and reading homeschool materials.'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';

const endpointsFiles = [
  './routes/math.js',
  './routes/reading.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);