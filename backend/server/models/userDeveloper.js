const mongoose = require("mongoose");

//user schema/model
const developerSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      label: "fname",
    },
    lname: {
      type: String,
      required: true,
      label: "lname",
    },
    link: {
      required: true,
      type: String,
      label : "linkedIn account",
    }
  },
  { collection: "developer" }
);

module.exports = mongoose.model('developer', developerSchema)