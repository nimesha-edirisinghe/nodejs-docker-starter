const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker starter");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`listen on port ${PORT}...`));
