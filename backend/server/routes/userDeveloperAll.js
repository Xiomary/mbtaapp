const express = require("express");
const router = express.Router();
const developerModel = require('../models/userDeveloper')

router.get('/getAll', async (req, res) => {
    const developerData = await developerModel.find();
    return res.json(developerData)
  })

  module.exports = router;