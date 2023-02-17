const routes = require("express").Router()
const controller = require("../controllers/meals")
const {mealValidation} = require("../validator/validate")

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// routes.use('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get("/", controller.getAll)

routes.get("/:id", controller.getSingle)

routes.post("/", mealValidation, controller.addMeal)

routes.put("/:id", mealValidation, controller.updateMeal)

routes.delete("/:id", controller.deleteMeal)

module.exports = routes