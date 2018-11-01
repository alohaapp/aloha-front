const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();

app.use(history());
app.use(express.static("build"));

const port = process.env.PORT || 8000;
app.listen(port);