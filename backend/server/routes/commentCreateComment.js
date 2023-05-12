const express = require("express");
const router = express.Router();
const commentModel = require('../models/commentModel');

// POST /comment/add
// Add a new comment
router.post('/add', async (req, res) => {
    const { username, stationName, comment } = req.body;

    // Create a new comment using the commentModel
    const createComment = new commentModel({
        username: username,
        stationName: stationName,
        comment: comment,
    });

    try {
        // Save the new comment to the database
        const savedComment = await createComment.save();
        res.send(savedComment);
    } catch (error) {
        res.status(400).send({ message: "Error trying to create comment" });
    }
});

module.exports = router;
