// const http = require('http');

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")
const mongodb = require("./databases/connect")

app.use("/", require("./routes"))
app.use(bodyparser.json())
app.use("/workouts", require("./routes/workouts"))

mongodb.initDb((err, mongodb) => {
	if (err) {
		console.log(err)
	} else {
		app.listen(port)
		console.log(`Connected to DB and listening on ${port}`)
	}
})