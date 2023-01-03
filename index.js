// imports of packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(4300, () => {
  console.log("listing on port 4300");
});
// server listening on port 4300
app.get("/", (req, res) => {
  res.send("hello");
});

/* cors means cross origin resource sharing it allows a frontend application such as react to connect with out backend */
app.use(cors);
