require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// connection to the database
const connectToDb = require("./db/db.js");
connectToDb();

app.listen(PORT, () => {
  console.log(`Server is Listening on port  ${PORT}`);
});
