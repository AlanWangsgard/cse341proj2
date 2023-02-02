const routes = require("express").Router()

routes.get("/", (req, res) => {
	res.send("Alan Wangsgard")
})

routes.get("/another", (req, res) => {
	res.send("Alan Wangsgard, but different")
})

module.exports = routes