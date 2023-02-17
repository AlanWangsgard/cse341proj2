// const http = require('http');

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")
const mongodb = require("./databases/connect")
const { auth } = require('express-openid-connect');

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.secret,
	baseURL: 'https://fitness-05k7.onrender.com',
	clientID: process.env.clientID,
	issuerBaseURL: process.env.issuerBaseURL
  };

app.use(auth(config));
app.use("/", require("./routes"))
app.use(bodyparser.json())
app.use("/workouts", require("./routes/workouts"))
app.use("/auth", require("./routes/auth"))


app.get('/', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

mongodb.initDb((err, mongodb) => {
	if (err) {
		console.log(err)
	} else {
		app.listen(port)
		console.log(`Connected to DB and listening on ${port}`)
	}
})

