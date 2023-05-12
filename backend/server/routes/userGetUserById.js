const express = require("express");
const router = express.Router();
const z = require("zod");
const bcrypt = require("bcrypt");

const newUserModel = require("../models/userModel");

// GET /getUserById
// Get user by ID
router.get("/getUserById", async (req, res) => {
  var { userId } = req.body;

  // Find the user by ID in the newUserModel collection
  newUserModel.findById(userId, function (err, user) {
    if (err) {
      console.log(err);
    }
    // Check if user is null
    if (user == null) {
      res.status(404).send("userId does not exist.");
    } else {
      return res.json(user);
    }
  });
});

module.exports = router;
