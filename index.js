const http = require("http");
const fs = require("fs/promises");

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  let file;
  switch (req.url) {
    case "/":
      file = "./index.html";
      break;
    case "/about":
      file = "./about.html";
      break;
    case "/contact-me":
      file = "./contact-me.html";
      break;
    default:
      file = "404.html";
  }
  fs.readFile(file)
    .then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      console.log(err);
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running on ${host}: ${port}`);
});
