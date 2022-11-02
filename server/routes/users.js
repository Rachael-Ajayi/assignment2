// FILENAME: Assignment2
// NAME: RACHAEL AJAYI
// STUDENTID: 301146832
// DATE: 1ND NOVEMBER, 2022
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
