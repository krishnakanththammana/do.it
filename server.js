const express =  require("express");
const app = express();
const port = 3200;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.info("app listening on port: " + port);
});