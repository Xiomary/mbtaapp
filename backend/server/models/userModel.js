const mongoose = require("mongoose");

//user schema/model
const newUserSchema = new mongoose.Schema(
  {
    //username of the user 
    username: {
      type: String,
      required: true,
      label: "username",
    },
    //users email
    email: {
      type: String,
      required: true,
      label: "email",
    },
    password: {
      required: true,
      type: String,
      min : 8
    },   
    //users fav route 
    favroute: {
      type: String,
      required: false,
      label: "favroute",
    },
    favline:{
      type: String,
      required: false,
      label: "favline",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model('users', newUserSchema)