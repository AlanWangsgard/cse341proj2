const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'fitness-05k7.onrender.com/workouts',
  schemes: ['https'],
};

const outputFile = 'routes/swagger.json';
const endpointsFiles = ['./routes/meals.js', './routes/workouts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);