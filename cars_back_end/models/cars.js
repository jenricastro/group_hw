const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({

        name: String,
        horsePower: String,
        image: String,
        year: String,
        make: String,
        model: String
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car