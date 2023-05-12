const mongoose = require("mongoose");

//user schema/model
const commentSchema = new mongoose.Schema(
  {
    //username of the commenter
    username: {
      type: String,
      required: true,
      label: "username",
    },
    //content of the comment
    comment: {
        type: String,
        required: true,
        label: "comment",
      },
      //name of the station the comment is associated with
    stationName: {
      type: String,
      required: true,
      label: "stationName",
    },
  },
  { collection: "comments" }
);

module.exports = mongoose.model('stationComments', commentSchema)