const routes = require("express").Router()
const controller = require("../controllers/meals")
const {mealValidation} = require("../validator/validate")
const { requiresAuth } = require('express-openid-connect');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// routes.use('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get("/", controller.getAll)

routes.get("/:id", controller.getSingle)

routes.post("/", requiresAuth(), mealValidation, controller.addMeal)

routes.put("/:id", requiresAuth(), mealValidation, controller.updateMeal)

routes.delete("/:id",requiresAuth(),  controller.deleteMeal)

module.exports = routes