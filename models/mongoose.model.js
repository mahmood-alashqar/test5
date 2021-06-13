const mongoose = require('mongoose');

const animationSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  img: String,
  description: String,
  modified: Array
})
const AnimationModel = new mongoose.model('animation', animationSchema);
module.exports = AnimationModel;