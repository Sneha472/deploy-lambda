const Express = require("express");
const serverless = require("serverless-http");

const app = new Express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Server is Listening to 3000"));

module.exports.handler = serverless(app);
