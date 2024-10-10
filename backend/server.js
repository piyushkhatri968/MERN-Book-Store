require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const booksRoute = require("./routes/booksRoute.js");
const app = express();

// const PORT = process.env.PORT;

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

const mongo_URL = process.env.MONGO_URL;

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("App connected to database");
    // app.listen(PORT, () => {
    //   console.log(`App is listening to port: ${PORT}`);
    // });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

module.exports = app; // Export the app instead of using app.listen()
