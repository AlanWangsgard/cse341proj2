const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'fitness-05k7.onrender.com',
  schemes: ['https'],
};

const outputFile = 'routes/swagger2.json';
const endpointsFiles = ['server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./routes'); // Your project's root file
});