// get the http module:
import http from "http";

// fs module allows us to read and write content for responses!!
import fs from "fs";


// creating a server using http module:
var server = http.createServer(function (request, response){

	// see what URL the clients are requesting:
	// console.log("client request URL: ", request.url);

	// this is how we do routing:
	if(request.url === "/") {
		fs.readFile("index.html", "utf8", function (){
			response.writeHead(200, {"Content-Type": "application/json"});
			var otherArray = [ "item1", "item2" ];
			var otherObject = { item1: "item1val", item2: "item2val" }; // send data about response
			var json = JSON.stringify({
				anObject: otherObject,
				anArray: otherArray,
				another: "item"
			});  //  send response body
			response.end(json); // finished!
		});
	} else {
		response.writeHead(404);
		response.end("File not found!!!");
	}
});
	// request didn't match anything:

	// function random(response) {
	//   console.log("Request handler random was called.");
	//   response.writeHead(200, {"Content-Type": "application/json"});
	//   var otherArray = ["item1", "item2"];
	//   var otherObject = { item1: "item1val", item2: "item2val" };
	//   var json = JSON.stringify({
	//     anObject: otherObject,
	//     anArray: otherArray,
	//     another: "item"
	//   });
	//   response.end(json);
	// }



// tell your server which port to run on
server.listen(6789);

// print to terminal window
// console.log("Running in localhost at port 6789");
