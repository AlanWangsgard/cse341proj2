const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'fitness.onrender.com/workouts',
  schemes: ['https'],
};

const outputFile = 'routes/swagger.json';
const endpointsFiles = ['routes/workouts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);