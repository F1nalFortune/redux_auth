// can use let and const inside server
// instead of using var
'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');

// first name, last name, phone number, email
let User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
