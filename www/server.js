"use strict";

const https = require("https");
const fs = require("fs");
const path = require("path");

const ssl_options = {
	key: fs.readFileSync("../ssl/server.key"),
	cert: fs.readFileSync("../ssl/server.pem"),
	ca: fs.readFileSync("../ssl/ca.crt"),
	requestCert: true
};

var handler = function(req, res) {
	if(!req.connection.getPeerCertificate().subject) {
		res.writeHead(401);
		res.end("Unauthorized");
		return;
	}

	console.log(req.method + ": " + req.url + " from " + req.connection.getPeerCertificate().subject.CN);

	switch(req.method) {
	case "GET":
		if(req.url === "/test/test1") {
			var file_path = path.join(__dirname, "..", "data", "test1.db");
			var stat = fs.statSync(file_path);

			res.writeHead(200, {
				"Content-Type": "application/x-sqlite3",
				"Content-Length": stat.size
			});

			var read_stream = fs.createReadStream(file_path);
			read_stream.pipe(res);
		} else {
			res.writeHead(404);
			res.end("File not found");
		}
		break;
	case "POST":
		break;
	}
};

var server = https.createServer(ssl_options);
server.addListener("request", handler);
server.listen(4444);
console.log("Listening on https://127.0.0.1:4444 ...");
