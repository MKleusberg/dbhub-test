"use strict";

const https = require("https");
const fs = require("fs");

var options = {
	host: "localhost",
	port: 4444,
	path: "/test/test1",
	method: "GET",
	key: fs.readFileSync("../ssl/client.key"),
	cert: fs.readFileSync("../ssl/client.crt"),
	ca: fs.readFileSync("../ssl/ca.crt"),
	passphrase: "password",
	rejectUnauthorized: false
};

var req = https.request(options, function(res) {
	console.log("Response:");
	console.log("status: ", res.statusCode);
	console.log("headers: ", res.headers);

	res.on("data", function(data) {
		console.log("Got data");
		process.stdout.write(data);
	});
});

req.on("error", function(err) {
	console.error(err);
});

req.end();
