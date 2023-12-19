let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
