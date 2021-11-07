const {Game} = require("../models/game.model")
module.exports.index = (req, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.create = (request, response) => {
    const { title, genre, url, image } = request.body;
    Game.create({
        title,
        genre,
        url,
        image,

    }).then(game => response.json(game)).catch(err => response.status(400).json(err));
}
module.exports.delete = (req, response) => {
    Game.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.findAll = (req, response) => {
    Game.find({})
    .then(games => response.json(games))
    .catch(err => response.json(err))
}

module.exports.getOne = (req, response) => {
    Game.findById(req.params.id)
        .then(game => response.json(game))
        .catch(err => response.json(err))
}
module.exports.update = (req, response) => {
    Game.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedP => response.json(updatedP))
        .catch(err => response.status(400).json(err))
}
