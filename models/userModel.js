const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
// require('../config/DB_connect')

const userSchema = new mongoose.Schema({
  id: {
    required: true,
    type: Number,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  age: {
    required: true,
    type: Number,
  },
  city: {
    required: true,
    type: String,
  },
  zipCode: {
    required: true,
    type: Number,
  },
});

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;
