const routes = require("express").Router()
const controller = require("../controllers/workouts")
const {workoutValidation} = require("../validator/validate")

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get("/", controller.getAll)

routes.get("/:id", controller.getSingle)

routes.post("/", workoutValidation, controller.addWorkout)

routes.put("/:id", workoutValidation, controller.updateWorkout)

routes.delete("/:id", controller.deleteWorkout)

module.exports = routes