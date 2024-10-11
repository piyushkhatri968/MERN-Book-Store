// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const booksRoute = require("./routes/booksRoute.js");
const app = express();

const PORT = 8080;

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

// const mongo_URL = process.env.MONGO_URL;

mongoose
  .connect(
    "mongodb+srv://piyushkhatri968:BO9SicifrC9zwYmQ@cluster0.dwfhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
