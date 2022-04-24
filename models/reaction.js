const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    type: String,
    required: 'Text is Required',
    minlength: 1,
    maxlength: 280 
  },

  reactionBody: {
    type: String,
    required: 'Body is Required',
    maxlength: 280 
  },
 
  username: {
    type: String,
    required: 'Username Created this thought'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },


});

 

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;