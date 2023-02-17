const routes = require("express").Router()
const controller = require("../controllers/workouts")
const {workoutValidation} = require("../validator/validate")
const { requiresAuth } = require('express-openid-connect');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get("/",requiresAuth(), controller.getAll)

routes.get("/:id", controller.getSingle)

routes.post("/", requiresAuth(), controller.addWorkout)

routes.put("/:id", workoutValidation, controller.updateWorkout)

routes.delete("/:id", controller.deleteWorkout)

module.exports = routes