const routes = require("express").Router()
const { requiresAuth } = require('express-openid-connect');

const { auth } = require('express-openid-connect');
const config = {
	authRequired: false,
	auth0Logout: true,
	secret: 'a long, randomly-generated string stored in env',
	baseURL: 'http://localhost:3000',
	clientID: process.env.clientID,
	issuerBaseURL: process.env.issuerBaseURL
  };

  routes.get('/', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

routes.use(auth(config));
routes.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = routes