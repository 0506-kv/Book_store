const express = require("express");
const app= express();
const mongoose = require("mongoose");
const port=8080;

app.listen(8080,()=>{
    console.log("Server is Listening on port 8080");
})