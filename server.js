const express = require("express");
const app = express();
const Contact = require("./app.js");
const PORT = 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});