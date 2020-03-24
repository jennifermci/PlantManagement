const Plant = require("../models/plant.model")

module.exports.findAllPlants = (req, res) =>{
    Plant.find()
        .then(allPlants => res.json({plants: allPlants}))
        .catch(err => err.json({message: "Tried to get all the plants, but failed.", error: err}))
}

module.exports.addOnePlant = (req, res) => {
    const {nickname, location, species } = req.body;
    Plant.create({nickname, location, species})
        .then(newlyCreatedPlant => res.json({plant: newlyCreatedPlant}))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOnePlant = (req, res) => {
    Plant.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err=> res.jason({message:"tried to delete a plant, but failed.", error: err}))
}

module.exports.getOnePlant = (req,res) => {
    Plant.findOne({_id: req.params.id})
        .then(OneSingPlant => res.json({plant: OneSingPlant}))
        .catch(err => res.json({message: "Tried to grab one plant, but failed.", error: err}))
}

module.exports.updateOnePlant= (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}