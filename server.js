// const http = require('http');

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")
const mongodb = require("./databases/connect")
const { auth } = require('express-openid-connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./routes/swagger.json');

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.secret,
	baseURL: 'https://fitness-05k7.onrender.com',
	clientID: process.env.clientID,
	issuerBaseURL: process.env.issuerBaseURL
  };

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
app.use(auth(config));
// app.use("/", require("./routes"))
app.use(bodyparser.json())
app.use("/workouts", require("./routes/workouts"))
app.use("/meals", require('./routes/meals'))
app.use("/auth", require("./routes/auth"))


mongodb.initDb((err, mongodb) => {
	if (err) {
		console.log(err)
	} else {
		app.listen(port)
		console.log(`Connected to DB and listening on ${port}`)
	}
})

