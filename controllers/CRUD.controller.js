const AnimationModel = require('../models/mongoose.model');

async function postAnimation(req, res) {
  const { name, slug, img, description, modified } = req.body;
  AnimationModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      const newAnimation = new AnimationModel({
        name: name,
        slug: slug,
        img: img,
        description: description,
        modified: modified
      })
      newAnimation.save();
      AnimationModel.find({}, (error, data) => res.send(data))
    }
  })
}
async function getAnimation(req, res) {
  AnimationModel.find({}, (error, data) => res.send(data))
}

async function deleteAnimation(req, res) {
  AnimationModel.remove({ slug: req.params.slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      AnimationModel.find({}, (error, data) => res.send(data))
    }
  })
}
async function updateAnimation(req, res) {
  const { name } = req.body;
  console.log(name);
  AnimationModel.findOne({ slug: req.params.slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      data.name = name;

      data.save().then(() => AnimationModel.find({}, (error, data) => res.send(data)))
    }
  })
}
module.exports = {
  postAnimation,
  getAnimation,
  deleteAnimation,
  updateAnimation
}