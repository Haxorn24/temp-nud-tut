const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our home page");
  } else if (req.url == "/about") {
    res.end("here is our short history");
  }
  res.end(`<h1>OOps</h1>
  <p>We cant seem to find ur page</p>
  <a href="/">back</a>`);
  // res.write("Welcome to our home page");
  // res.end();
});
server.listen(5000);
