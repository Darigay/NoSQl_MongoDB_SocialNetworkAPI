const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: 'Username is Required'
  },

 
  email: {
    type: String,
    unique: true,
    required: 'email is Required',
    match: [/.+@.+\..+/]
  },

  thoughts: [],
  friends: []

});

 

const User = model('User', UserSchema);

module.exports = User;
