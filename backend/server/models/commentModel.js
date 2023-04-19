const mongoose = require("mongoose");

//user schema/model
const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      label: "username",
    },
    comment: {
        type: String,
        required: true,
        label: "comment",
      },
    stationName: {
      type: String,
      required: true,
      label: "stationName",
    },
  },
  { collection: "comments" }
);

module.exports = mongoose.model('stationComments', commentSchema)