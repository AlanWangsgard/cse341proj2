const routes = require("express").Router()
const controller = require("../controllers/meals")
const {workoutValidation} = require("../validator/validate")

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// routes.use('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get("/meals", controller.getAll)

routes.get("/meals/:id", controller.getSingle)

routes.post("/meals", workoutValidation, controller.addMeal)

routes.put("/meals/:id", workoutValidation, controller.updateMeal)

routes.delete("/meals/:id", controller.deleteMeal)

module.exports = routes