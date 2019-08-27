const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 7,
    validate(value){
      if(!validator.isEmpty(value)) {
        throw new Error("Please enter your password.");
      }else if(validator.equals(value.toLoverCase(), "password")) {
        throw new Error("Password can not be 'password'");
      }
    }
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  tokens:[{
    token: {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;