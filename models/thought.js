const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Text is Required',
    minlength: 1,
    maxlength: 280 
  },

 
  userCreated: {
    type: Date,
    default: Date.now
  },

  username: {
    type: String,
    required: 'Username Created this thought'
  },

  thoughts: [],
  friends: []

});

 

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;