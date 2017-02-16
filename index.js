const http = require("http");
const fs = require("fs");

const ASSETS = {
  "/": {
    contentType: "text/html",
    file: "index.html"
  },
  "/bundle.css": {
    contentType: "text/css",
    file: "bundle.css"
  },
  "/bundle.js": {
    contentType: "application/javascript",
    file: "bundle.js"
  }
};

http.createServer((req, res) => {
  const asset = ASSETS[req.url];

  if(asset) {
    res.writeHead(200, {"Content-Type": asset.contentType});
    fs.createReadStream(asset.file).pipe(res);
  } else {
    res.writeHead(400, {"Content-Type": "text/plain"}, "not found");
  }
}).listen(8000);

console.log("server listening at localhost:8000");
