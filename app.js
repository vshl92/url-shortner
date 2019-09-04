"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

global.urlMap = {};

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const generateShortURL = length => {
	let result = "";
	let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		 result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

app.get('/:uid', function(req, res) {
	if (req.params && req.params.uid && global.urlMap[req.params.uid]) {
		res.redirect(global.urlMap[req.params.uid]);
	} else {
		res.send(400, { "error": "URL does not exist"});
	}
});

app.post('/url-shortner', function(req, res) {
	if (req.body && req.body.url) {

		const key = generateShortURL(10);

		global.urlMap[key] = req.body.url;

		res.send(200, { "short_url": `http://localhost:3000/${key}`});
	} else {
		res.send(400, { "error": "Please provide a url" });
	}
});

const server = app.listen(3000, function () {
	console.log("server is running");
});