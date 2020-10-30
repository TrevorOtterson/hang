const express = require("express");
const passport = require("passport")
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", passport.authenticate("signup"), (req, res) => {
    res.json(req.flash("error"))
});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.flash("error"))



});

router.get('/', passport.authenticate('local'), (req, res) => {
    res.status(200).json({
        success: `logged in as ${req.user.email}`
    });
});

module.exports = router;
