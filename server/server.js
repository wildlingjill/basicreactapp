// get the http module:
var http = require("http");

// path needed for the path.join in the res.sendFile function
var path = require("path");

// requires and instantiates an express server
var express = require("express");
var app = express();

// serves html file with get request and res.sendFile
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../client", "react_test.html"));
});

// serves json object with get request and res.json
app.get("/json", function(req, res){
	var otherArray = [ "item1", "item2" ];
	var otherObject = { item1: "item1val", item2: "item2val" };
	var json = {
		anObject: otherObject,
		anArray: otherArray,
		another: "item"
	};
    res.json(json);
});

// creates a url called static and mounts the dist folder under that url
app.use('/static', express.static(path.join(__dirname, '../dist')));

// tells server to listen on port 6789
app.listen(6789);
