const express = require("express");
const router = express.Router();
const Hang = require("../models/Hang");




router.post("/createhang", (req, res) => {
    res.json(req.flash("error"))
});


router.post("/joinhang", (req, res) => {
    res.json(req.flash("error"))



});

module.exports = router;
