// imports of packages
const express = require("express");
const bodyParses = require("body-parser");
const cors = require("cors");
const app = express();
// middlewares
app.use(bodyParses.json());
app.use(express.json);
app.use(cors);

// server listening on port 4300
app.listen(4300);
