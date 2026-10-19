

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
