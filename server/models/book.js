// FILENAME: Assignment2
// NAME: RACHAEL AJAYI
// STUDENTID: 301146832
// DATE: 1ND NOVEMBER, 2022
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class -->
let bookModel = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    number: String
  },

  {
    collection: "user",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Book", bookModel);
