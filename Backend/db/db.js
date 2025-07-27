const mongoose = require("mongoose");

const DB_URL = process.env.DB_CONNECT;

// Function to Connect To the Database..
function connectToDb() {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error int DB Connection", err);
    });
}

module.exports=connectToDb;
