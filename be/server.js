const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

connectDB();
const app = express();

// app.get("/", (req, res) => {
//   res.send("API Running!");
// });


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Start on port ${PORT}`));
