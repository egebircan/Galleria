const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  imageData: {
    type: String,
    required:true
  },
  title:{
    type: String,
    required: true,
    default: "none"
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  uploadedAt:{
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;