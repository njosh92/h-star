const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [1, '{PATH} must be at least 1 char'],
        maxlength: 20

    },
    image: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [1, '{PATH} not valid'],

    },
    url: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [6, '{PATH} must be valid'],
        maxlength: 200
    },
    genre: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [3, '{PATH} must be valid '],
        maxlength: 100
    },

    
}, { timestamps: true })

// const Product = mongoose.model("Product", ProductSchema)

module.exports.Game= mongoose.model('Game',GameSchema)